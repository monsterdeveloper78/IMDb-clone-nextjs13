"use client"

import Link from "next/link";
import { useSearchParams } from 'next/navigation'
const NavbarItem = ({title, param}) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    return (
        <div className={`m-4 hover:text-amber-600 transition-all duration-500 font-semibold p-2 ${
            genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg text-purple--500"
        } `} >
                <Link href={`/?genre=${param}`} >{title}</Link>
        </div>
    );
}

export default NavbarItem;