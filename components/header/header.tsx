import React from 'react';
import Navbar from "./navbar";
import style from '../../styles/header.module.scss'
import Image from "next/image";
import logo from '../../public/next-logo.png'

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.logoWrapper}>
				<Image
					objectFit={"contain"}
					layout={"fill"}
					src={logo}
					alt={'Logo'}
					placeholder={"blur"}
				/>
			</div>
			<Navbar />
		</header>
	)
};

export default Header;