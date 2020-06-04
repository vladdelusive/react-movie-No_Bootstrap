import React from 'react'
import {IMAGE_URL, CARD_SIZE} from '../../config'
import './Actor.css'
import male from './unknown_male.png'
import female from './unknown_female.png'
import {Link} from 'react-router-dom'

export default function Actor({path, id, gender, name}) {
    const image = path === null ? gender === 2 ? male : female : `${IMAGE_URL}${CARD_SIZE}${path}`
    return (
        <div className="actor">
            <Link className="actor__photo" to={`/actors/${id}`}> <img src={image} alt="actor_image"/> </Link>
            <div className="actor-name">
                <Link className="actor-name__link" to={`/actors/${id}`}>
                    <h5 className="actor-name__link actor-name__link--text">{name}</h5>
                </Link>
            </div>
        </div>
    )
}
