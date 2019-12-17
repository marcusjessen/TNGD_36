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

        if (scrollTop < 1425) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div className={this.state.hasScrolled ? 'Sav4' : 'Sav4b'}>
              <img src={require('../img/IMG_8933.jpg')}/>  
            
            <div className="Wildebeest2">
                <p>
                  ...the migration, however, is no easy feat. Each year around 250, 000 are killed by carnivores or die from thirst, hunger and exhaustion...
                </p>
            </div>

            </div>
        )
    }
}
       
export default Scroller3;