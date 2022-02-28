import React from 'react';

const ContactInfo = ({contact}: {contact: {id: number, email: string, name: string, address: any}}) => {
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