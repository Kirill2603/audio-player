import React from "react";
import ContactInfo from "../../components/contact-info";
import {GetServerSideProps} from "next";


export const getServerSideProps: GetServerSideProps  = async (context) => {


	const {id} = context.query
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	const data = await res.json()

	if (!data) {
		return {
			notFound: true
		}
	}

	return {
		props: {contact: data}
	}

}

const Contact = ({contact}: any) => {
	console.log(contact)
	return (
		<>
			<ContactInfo contact={contact}/>
		</>
	)
}
export default Contact