import type {NextPage} from 'next'
import Head from "next/head";
import React from "react";
import {GetStaticProps} from "next";
import {SocialsType} from "./api/data/socials";
import Socials from "../components/socials";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.API_HOST}/socials`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {socials: data}
    }
}

type PropsType = {
    socials: Array<SocialsType>
}

const Home: NextPage<PropsType> = ({socials}) => {

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Socials socials={socials}/>
        </>

    )
}

export default Home
