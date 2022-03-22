export type ContactType = {
	id: number,
	email: string,
	name: string,
	address: AddressType
}

export type AddressType = {
	street: string,
	suite: string,
	city: string,
	zipcode: string
}

export type SocialsType = Array<{
	id: number,
	icon: string,
	path: string
}>
