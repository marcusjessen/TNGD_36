import React from 'react'
import './savanna.css'

class Scroller12 extends React.Component {
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

        if (scrollTop < 3825) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div class={this.state.hasScrolled ? 'Maasai4' : 'Maasai4b'}>
              <img src={require('../img/IMG_8770.jpg')}/>  
            
            <div class="MaasaiText4">
                <p>
                    Besides the adumu the Maasai have also gained recognition from their  clothing. Most widely recognised is probably the large sheet that the Maasai traditionally wrap around the body. This sheet is called Shúkà. 
                    <br/>
                    <br/>
                    Maasai clothing comes in many colours. Red is a colour that is very often used by the Maasai, but also blue, black, multicoloured, striped and checkered cloth are also worn. 
                    <br/>
                    <br/>
                    It is very common for Maasai people to wear bracelets, regardless of gender. The women often weave and bead the jewelery that is essential to Maasai traditonal ornamentation. The colour of the jewelery, however, can vary a lot.
                </p>
            </div>

            </div>
        )
    }
}
       
export default Scroller12;