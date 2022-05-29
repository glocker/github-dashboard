import React from 'react'
import './Card.css'

export default function Card(props) {

    return props.items.map(item => {
        return(
            <div className="Card-body" key={item.id}>
                <div className="Card-header">
                    <div className="Card-name">
                        {item.name}
                    </div>
                    <div className="Card-stars">
                        &#9733;{item.size}
                    </div>
                </div>

            </div>
        )
    })
}