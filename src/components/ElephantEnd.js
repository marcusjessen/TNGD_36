import React from 'react'
import {Parallax} from 'react-parallax'
import "./savanna.css"

const ElephantEnd = () => (
    <div className="ElephantEnd">
       <Parallax
            blur={{ min: -15, max: 20 }}
            bgImage={require('../img/IMG_3939.jpg')}
            bgImageAlt="ostrages"
            strength={-250}
        >
      
        </Parallax>
    </div>

);
export default ElephantEnd
