import React, {ChangeEvent, FC, useState} from "react";
import Head from "next/head";
import {GetStaticProps} from "next";
import {PostType} from "../../types";
import post from "./post";


type PostsPropsType = {
	posts: Array<PostType>
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await res.json()

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {posts: data}
	}
}

const Posts: FC<PostsPropsType> = ({posts}) => {

	const [postsCount, setPostCount] = useState<number>(1)
	const [start, setStart] = useState<number>(0)
	const [end, setEnd] = useState<number>(10)

	let filteredPosts = posts.slice(start,end)

	const nextPage = () => {
		setStart(start + 10)
		setEnd(end + 10)
		setPostCount(postsCount + 1)
	}
	const prevPage = () => {
		setStart(start - 10)
		setEnd(end - 10)
		setPostCount(postsCount - 1)
	}

	return (
		<>
			<Head>
				<title>Posts</title>
			</Head>
			<div>Posts :</div>
			<div>Page : {postsCount}</div>
			<ul>
				{filteredPosts && filteredPosts.map(({id, title, body}) => (

						<li key={id}>{title}
							<span>{body}</span>
						</li>


				))}
			</ul>
			<div>
				<button disabled={start<=0} onClick={() => prevPage()}>{`<-`}</button>
				<button disabled={end>=posts.length} onClick={() => nextPage()}>{`->`}</button>
			</div>
		</>
	)

}
export default Posts