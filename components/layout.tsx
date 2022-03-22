import React, {FC, ReactNode} from "react";
import styles from '../styles/layout.module.scss'
import Footer from "./footer";
import Header from "./header/header";

type LayoutPropsType = {
	children: ReactNode
}

const Layout: FC<LayoutPropsType> = ({children}) => {
	return (
		<>
			<Header/>
			<div className={styles.main}>{children}</div>
			<Footer/>
		</>
	)
}
export default Layout