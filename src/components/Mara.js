import React from 'react'
import './Mara.css'

const Mara = props => (
    <div class="Mara">
        <img src={props.image}/>
        <p>{props.text} </p>
    </div>
)

export default Mara