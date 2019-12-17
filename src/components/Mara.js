import React from 'react'
import './Mara.css'

const Mara = props => (
    <div className="Mara">
        <img src={props.image}/>
        <p>{props.text} </p>
    </div>
)

export default Mara