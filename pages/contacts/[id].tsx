import React, {FC} from "react";
import ContactInfo from "../../components/contact-info";
import {GetServerSideProps} from "next";
import {ContactType} from "../../types";

type ContactPropsType = {
	contact: ContactType
}

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

const Contact: FC<ContactPropsType> = ({contact}) => {
	return (
		<>
			<ContactInfo contact={contact}/>
		</>
	)
}
export default Contact