import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

export default function Card({title, overview, poster, pathTo, searching}) {

    return (
        <div className="card-movie" style={searching ? {width: 300} : {width: 350}}>
            <Link className="card-movie__post" to={pathTo}>
                <img style={searching ? {width: 300} : {width: 350}} src={poster} alt="sorry" />
            </Link>
            <div className="card-body">
                <h5 className="card-body__title">{title}</h5>
                <p className="card-body__overview">{overview}</p>
                <Link className="card-body__link" to={pathTo}>Read more...</Link>
            </div>
        </div>
    )
}
