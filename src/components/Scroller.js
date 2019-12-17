
import React from "react"
import './header.css'

class Scroller extends React.Component {
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
            <div className={this.state.hasScrolled ? 'Sav3' : 'Sav3b'}>
              <img src={require('../img/IMG_9129.jpg')}/>  
            
            <div className="Wildebeest">
              <p>The Great Migration
                  <hr/>
                  <br/>
                  Two million wildbeest migrate from Tanzania's Serengeti to Kenya's Maasai Mara every year. In search of water, they travel almost 3000 kilometres...
                  <br></br>
                  <br></br>
                  Half a million wildbeest are born between January and March in the Serengeti.
                  <br></br>
                  <br></br>
                  Interestingly, the wildbeest do not have any natural leaders, but rather split up into smaller herds that circle around one large heard, all going in different directions...
                </p>
            </div>

            <h4 className="HoldDown">
                You can get a closer look at the images by hovering over them and holding down the left mouse button...
            </h4>

            </div>
        )
    }
}


export default Scroller