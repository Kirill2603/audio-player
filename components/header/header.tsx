import React from 'react';
import Navbar from "./navbar";
import style from '../../styles/header.module.scss'

const Header = () => {
	return (
		<header className={style.header}>
			<h1>NextApp</h1>
			<Navbar />
		</header>
	)
};

export default Header;