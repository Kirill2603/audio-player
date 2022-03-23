import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../components/layout";
import React from "react";
import styles from "../styles/layout.module.scss";

const MyApp = ({Component, pageProps}: AppProps) => (

	<Layout>
		<div className={styles.main}>
			<Component {...pageProps} />
		</div>
	</Layout>


)


export default MyApp
