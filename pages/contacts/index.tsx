import React from "react";
import Head from "next/head";
import {GetStaticProps} from "next";


export const getStaticProps: GetStaticProps  = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {contacts: data}
	}

}
const Contacts = ({contacts}: {contacts:  Array<{id: number, name: string, email: string}> }) => {

	return (
		<>
			<Head>
				<title>Contacts</title>
			</Head>
			<div>Contacts :</div>
			<ul>
				{contacts && contacts.map(({id, name, email}) => (
					<li key={id}>
						<strong>{name}</strong>
						<span> ({email})</span>
					</li>
				))}
			</ul>
		</>
	)
}
export default Contacts