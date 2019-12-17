import React from 'react'
import {Parallax} from 'react-parallax';

const TheHero = () => (
    <div>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../img/IMG_8685b.jpg')}
            bgImageAlt="the man"
            strength={-450}
        >
            <div style={{ height: '350px' }} />

             <div className="intro-p">
                <p>Welcome to our basecamp. 
                  <br/>
                  <br/>
                Maasai Mara is a game reserve in Kenya. Its name, translated from Maasai language, means "spotted plains", and its wide open landscapes stretch farther than any eye can see.  
                  <br/>
                  <br/>
                The plains are home to species raging from the tiniest ant to the Big Five. They are also home to the Maasai people. A nomad people whose land stretches from the Mara, in the south of Kenya, all the way to the Serengetti in the North of neighbouring country, Tanzania.
                  <br/>
                  <br/>
                Visit Maasai Mara and choose your adventure below...
                </p>
             </div>

            }
        </Parallax>

            
    </div>
);
export default TheHero;
