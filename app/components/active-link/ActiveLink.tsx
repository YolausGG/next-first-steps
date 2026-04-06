'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

// import style from './ActiveLink.module.css'

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

    const pathName = usePathname();
    
    return (

        // <Link key={path} className={style.link} 
        //     href={path}>
        //     {text}
        // </Link>
        <Link key={path} className={` link ${(pathName === path) && 'active-link'} `} 
            href={path}>
            {text}
        </Link>
    )
}

export default ActiveLink