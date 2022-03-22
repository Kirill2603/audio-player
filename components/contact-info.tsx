import React, {FC} from 'react';
import {ContactType} from "../types";

type ContactInfoPropsType = {
	contact: ContactType
}

const ContactInfo: FC<ContactInfoPropsType> = ({contact}) => {
	const {name, email, address} = contact || {}
	const {street, suite, city, zipcode} = address || {}

	if (!contact) {
		return <h1>Not found contact :(</h1>
	}

	return (
		<>
			<h2>Contact :</h2>
			<span>Name - {name}</span>
			<span>Email - {email}</span>
			<h2>Address : </h2>
			<span>Zipcode - {zipcode}</span>
			<span>City - {city}</span>
			<span>Street - {street}</span>
			<span>Suite - {suite}</span>

		</>
	);
};

export default ContactInfo;