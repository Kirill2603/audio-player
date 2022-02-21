import React, {useEffect} from "react";
import {useRouter} from "next/router";

const Error = () => {

	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 5000)
	}, [router])

	return (
		<>
			<h1>404...</h1>
			<h2>Fuck</h2>
			<h2>Fuck</h2>
			<h2>Fuck!</h2>
			<h3>You will redirected to Homepage</h3>
		</>
	)
}

export default Error