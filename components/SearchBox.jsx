"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const SearchBox = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()   
        if (!search) return;
        router.push(`/search/${search}`);
    }
    return (
        <form onSubmit={handleSubmit} className="flex max-w-6x mx-auto justify-between items-center px-5">
            <input type="text" className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1 " placeholder="Search keywords ..." onChange={(e) => setSearch(e.target.value)} value={search} />
            <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400 ">Search</button>
        </form>
    );
}

export default SearchBox;