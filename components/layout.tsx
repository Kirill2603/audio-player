import React, {ReactElement} from "react";
import styles from '../styles/layout.module.scss'
import Footer from "./footer";
import Header from "./header/header";

type LayoutPropsType = {
	children: ReactElement
}

const Layout = ({children}: LayoutPropsType) => {
	return (
		<>
			<Header/>
			<div className={styles.main}>{children}</div>
			<Footer/>
		</>
	)
}
export default Layout