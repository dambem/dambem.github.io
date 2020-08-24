import React from "react";

export default function Card({ title, desc, link,  image}) {
    return (
        <div class="card">
            <img class="card-img-top" src={image} />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{desc}</p>
                <a href={link}> View Here </a>
            </div>
        </div>
    );
}