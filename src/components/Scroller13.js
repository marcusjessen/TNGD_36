import React from 'react'
import './savanna.css'

class Scroller13 extends React.Component {
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

        if (scrollTop < 4575) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div className={this.state.hasScrolled ? 'Maasai5' : 'Maasai5b'}>
              <img src={require('../img/IMG_8719.jpg')}/>  
            
            <div className="MaasaiText5">
                <p>
                    In Maasai tradition, the hair also carries significance. Shaving the hair represents the start of a new chapter in one's life. Only warriors may carry long hair, which as you see in the picture to the left is braided into thin strands.
                    <br/>
                    <br/>
                    Boys get their hair shaven two days before their circumcision. After which the young warriors style their hair.
                    <br/>
                    <br/>
                    As for girls a bride to be will have her hair shaved. Women who have previously miscarried a baby, will position their hair at the front or the back of their head depending on whether she lost a boy or a girl.
                </p>
                <hr/>
            </div>

            </div>
        )
    }
}
       
export default Scroller13;