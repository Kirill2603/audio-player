import Link from 'next/link';
import React from 'react';
import style from '../../styles/header.module.scss'
import {useRouter} from "next/router";

const navigations = [
	{id: 1, title: 'Home', path: '/'},
	{id: 2, title: 'Contacts', path: '/contacts'},
	{id: 3, title: 'Posts', path: '/posts'},
]

const Navbar = () => {

	const {pathname} = useRouter()

	return (
		<>
			<nav className={style.navbar}>
				<ul>
					{navigations.map(({id, title, path}) => (
						<li key={id}><Link href={path}>
							<a className={pathname === path ? style.active : ''}>{title}</a>
						</Link></li>
					))}
				</ul>
			</nav>
		</>
	)
};

export default Navbar;