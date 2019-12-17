import React from 'react'
import {Parallax} from 'react-parallax'
import "./Maasai.css"

const Maasai = () => (
    <div>
       <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../img/IMG_8710b.jpg')}
            bgImageAlt="MaasaiJump"
            strength={-300}
        >
            <div className="SavannaHeadline">
              <h1> maasai </h1>
            </div>

            <div style={{ height: '350px' }} />

             <div className="Savanna-Intro">

                <p>Welcome to one of many Maasai villages. The Maasai people live in many places across Kenya and in northern Tanzania. They are most likely the most well-known people in Kenya
                  <br></br>
                  <br></br>
                The Maasai people are semi-nomadic, meaning that while some have abandoned their nomadic customs, many Maasai still live in shelters with waterproofing built from cattle dung.
                  <br></br>
                  <br></br>
               Scroll down slowly to learn more and to meet the Maasai people yourself...
                </p>
             </div>

            
        </Parallax>
    </div>

);
export default Maasai
