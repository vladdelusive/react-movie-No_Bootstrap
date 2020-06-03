import image from "../movie-logo.jpg";
import React from "react";
import "./Logo.css"

export default function Logo() {
    return (
        <a className="logo" href="https://www.themoviedb.org/">
            <img className="logo__img" src={image} alt="logo" />
        </a>
    )
}