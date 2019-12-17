import React from 'react'
import {Parallax} from 'react-parallax'
import "./SavBack.css"
import "./savanna.css"

const SavannahEnd = () => (
    <div >
         <Parallax
            blur={{ min: -15, max: 20 }}
            bgImage={require('../img/IMG_9195.jpg')}
            bgImageAlt="ostrages"
            strength={-300}
        >
        </Parallax>
    </div>

);
export default SavannahEnd
