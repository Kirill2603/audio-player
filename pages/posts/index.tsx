import React, {FC} from "react";
import Head from "next/head";
import {GetStaticProps} from "next";
import {PostType} from "../../types";


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
	return (
		<>
			<Head>
				<title>Posts</title>
			</Head>
			<div>Posts :</div>
			<ul>
				{posts && posts.map(({id, title, body}) => (
					<>
						<li key={id}>{title}</li>
						<span>{body}</span>
					</>
				))}
			</ul>
		</>
	)

}
export default Posts