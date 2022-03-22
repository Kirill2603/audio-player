
import React, {FC} from "react";
import style from "../styles/socials.module.scss"
import {SocialsType} from "../types";

type SocialsPropsType = {
    socials: SocialsType
}

const Socials: FC<SocialsPropsType> = ({socials}) => {

    if (!socials) {
        return null;
    }

    return (
        <>

            <ul className={style.socials}>
            {socials && socials.map(({id, path,icon}) => (
                <li key={id}>
                    <a href={path} target="_blank" rel="noopener noreferrer">
                        <i className={`${icon} fa-3x`} aria-hidden="true" />
                    </a>
                </li>
                ))}
            </ul>

        </>
    )
}

export default Socials