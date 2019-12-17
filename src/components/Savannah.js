import React from 'react'
import {Parallax} from 'react-parallax'
import "./savanna.css"

const Savanna = () => (
    <div>
       <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../img/IMG_9201c.jpg')}
            bgImageAlt="zebras"
            strength={-300}
        >
            <div className="SavannaHeadline">
              <h1> safari </h1>
            </div>

            <div style={{ height: '350px' }} />

             <div className="Savanna-Intro">

                <p>Welcome to the savannah of Maasai Mara. We are going on safari. "Safari" is Kiswahili for "travel".
                  <br></br>
                  <br></br>
                Maasai Mara, with its 1,510 square kilometres, is not the largest reserve in Kenya, but arguably the most well-known. It has a large populace of lions, leopards, cheetas and elephants. It is also where the Great Migration of the wildebeest takes place.
                  <br></br>
                  <br></br>
               Scroll down slowly to learn more and to discover the savannah for yourself...
                </p>
             </div>

            
        </Parallax>
    </div>

);
export default Savanna
