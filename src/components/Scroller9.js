import React from 'react'
import './savanna.css'

class Scroller9 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop < 700) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div class={this.state.hasScrolled ? 'Maasai1' : 'Maasai1b'}>
              <img src={require('../img/IMG_8693.jpg')}/>  
            
            <div class="MaasaiText">
                <p>
                    The Warriors of the Plains
                    <hr/>
                    Maasai Mara is named after the Maasai people, who have historically been a nomadic people and have their own language, Maa.
                    <br/>
                    <br/>
                    They are known for their music and dance as well as their destinctive way of dressing and their body modifications.
                    <br/>
                    <br/>
                    Their traditional music is built around the voice and follow  call-and-response pattern. This means that a leading singer, olaranyani, starts the song and the rest of the group responds.
                    <br/>
                    <br/>
                    They also use a musical instrument in the form of the horn of the Greater Kudu. The Kudu is an antelope animal with long horns.
                </p>
            </div>

            <h4 class="HoldDown">
                You can get a closer look at the images by hovering over them and holding down the left mouse button...
            </h4>

            </div>
        )
    }
}
       
export default Scroller9;