import React from 'react'

export default function SearchBar() {


    return (
        <form name="search">
            <input type="text" className="input" name="txt" placeholder="Search" />
            <button>Go</button>
        </form>
    )
}