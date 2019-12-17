import React from 'react'
import './savanna.css'

class Scroller6 extends React.Component {
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

        if (scrollTop < 5125) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div className={this.state.hasScrolled ? 'Sav8' : 'Sav8b'}>
              <img src={require('../img/IMG_8332.jpg')}/>  
            
            <div className="ElephantText3">
                <p>
                    Luckily, there are organisations all over Kenya working hard to preserve the elephants, and other endangered species.
                    <br/>
                    <br/>
                    The most well-known is arguably David Sheldrick Wildlife Trust (pictured left), founded in 1977 in the nation's captial, Nairobi.
                    <br/>
                    <br/>
                    D.S.W.T. is an organisation that takes care of orphaned elephants, white rhinos and giraffes, all of whom are vulnerable species. They also protect the black rhino which, with an estimated population of 5, 000, has a conversion status of "critically endangered". The rhinos, white and black, are killed for their horns.
                </p>
            </div>

            </div>
        )
    }
}
       
export default Scroller6;