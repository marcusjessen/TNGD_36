import React from 'react'
import './card.css'
import { Link } from 'gatsby'

const Card = props => (
    <div class="Card">
        <img src={props.image}/>
        <h3>{props.title}</h3>
        <p>{props.text} </p>
    </div>
)

export default Card