import React, {ReactChildren, ReactElement} from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutPropsType = {
	children: ReactElement
}

const Layout = ({children}: LayoutPropsType) => {
	return (
		<>
			<Header/>
			{children}
			<Footer/>
		</>
	)
}
export default Layout