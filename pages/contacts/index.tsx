import React, {FC} from "react";
import Head from "next/head";
import Link from 'next/link'
import {GetStaticProps} from "next";
import {ContactType} from "../../types";

type ContactsPropsType = {
    contacts: Array<ContactType>
}


export const getStaticProps: GetStaticProps = async () => {
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

const Contacts: FC<ContactsPropsType> = ({contacts}) => {

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <div>Contacts :</div>
            <ul>
                {contacts && contacts.map(({id, name, email}) => (
                    <li key={id}>
                        <b>
                            <Link href={`/contacts/${id}`}>
                                {name}
                            </Link>
                        </b>
                        <span> ({email})</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Contacts