import React from 'react'
import {Parallax} from 'react-parallax'
import "./savanna.css"

const Dance = () => (
    <div class="Dance">
       <Parallax
            blur={{ min: -15, max: 20 }}
            bgImage={require('../img/IMG_8725.jpg')}
            bgImageAlt="Adumu"
            strength={-350}
        >
            
        </Parallax>

    </div>

);
export default Dance
