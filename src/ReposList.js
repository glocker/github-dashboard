import React, { useState, useEffect } from 'react'
import Card from './Card';

export default function ReposList() {

    const [items, initItem] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://api.github.com/search/repositories?q=stars:>=10000&sort=stars&order=desc&per_page=10')
        if (!response.ok) {
            throw new Error('Data could not be fetched!')
        } else {
            return response.json()
        }
    }

    useEffect(() => {
        fetchData()
            .then((res) => {
                initItem(res.items)
                console.log(res.items);
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])

    return (
        <div>
            <div>Repositories list</div>
            <Card items={items} />
        </div>
    )
}