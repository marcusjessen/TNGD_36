import React from 'react'
import './savanna.css'

class Scroller11 extends React.Component {
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

        if (scrollTop < 2225) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div class={this.state.hasScrolled ? 'Maasai3' : 'Maasai3b'}>
              <img src={require('../img/IMG_8733.jpg')}/>  
            
            <div class="MaasaiText3">
                <p>
                The boy who jumps the highest will secure their status as a warrior and gain the option to choose their bride first.
                <br/>
                <br/>
                During the adumu the warriors in the circle and the onlookers will be singing and often raise the pitch of their voices based on the height of the jump.
                <br/>
                <br/>
                <hr/>
                </p>
            </div>

            </div>
        )
    }
}
       
export default Scroller11;