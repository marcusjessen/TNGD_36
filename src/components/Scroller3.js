import React from 'react'
import './savanna.css'

class Scroller3 extends React.Component {
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

        if (scrollTop < 2075) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div class={this.state.hasScrolled ? 'Sav5' : 'Sav5b'}>
              <img src={require('../img/IMG_9034.jpg')}/>  
            
            <div class="Wildebeest3">
                <p>
                  ...but for those who survive, a land of lush grass and plenty of water awaits.

                The wildebeest, the most populous specie of the Maasai Mara, is not afraid of daring escapades if it means that the grass is in fact greener on the other side.
                <br/>
                <br/>
                <hr/>
                </p>
            </div>

            </div>
        )
    }
}
       
export default Scroller3;