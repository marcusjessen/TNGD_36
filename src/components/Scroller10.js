import React from 'react'
import './savanna.css'

class Scroller10 extends React.Component {
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

        if (scrollTop < 1500) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div className={this.state.hasScrolled ? 'Maasai2' : 'Maasai2b'}>
              <img src={require('../img/IMG_8726b.jpg')}/>  
            
            <div className="MaasaiText2">
                <p>
                  Adumu, or aigus, is the Maa for "to jump up and down in a dance". Adumu is the jumping dance that the Maasai are so famous for.
                  <br/>
                  <br/>
                  The adumu is performed during the coming of age ceremony of Eunoto. This is when Maasai boys, warriors, enter manhood.
                  <br/>
                  <br/>
                  One or two at a time, the Maasai warriors will enter the center of a ring formed by other warriors. The warriors at the center maintain a narrow posture and never let their heals touch the ground.
                  <br/>
                  <br/>
                  Nowadays, the adumu is performed for tourists who may participate and compete with the warriors in who can jump higher.
                </p>
            </div>

            </div>
        )
    }
}
       
export default Scroller10;