import React from 'react'
import './savanna.css'

class Scroller7 extends React.Component {
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

        if (scrollTop < 5800) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div className={this.state.hasScrolled ? 'Sav9' : 'Sav9b'}>
              <img src={require('../img/IMG_4200.jpg')}/>  
            
            <div className="ElephantText4">
                <p>
                    Hopefully, conversion and anti-poaching projects will be successful in strengthening the elephants, and other vulnerable species inhabiting the Mara.
                    <br/>
                    <br/>
                    There are several park rangers in Maasai Mara collecting snares and arresting hundreds of poachers every year.
                    <br/>
                    <br/>
                    In order to send the message that ivory trade should be banned, 105 tons of ivory was burned at Nairobi National Park in April of 2016. The burning was attended by president Uhuru Kenyatta who stated:
                </p>
            </div>

            </div>
        )
    }
}
       
export default Scroller7;