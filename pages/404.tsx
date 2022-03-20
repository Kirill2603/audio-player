import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

const Error = () => {

	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 2000)
	}, [router])

	return (
		<>
			<Head>
				<title>Error</title>
			</Head>
			<h1>404...</h1>
			<h2>Fuck</h2>
			<h2>Fuck</h2>
			<h2>Fuck!</h2>
			<h3>You will redirected to Homepage</h3>
		</>
	)
}

export default Error