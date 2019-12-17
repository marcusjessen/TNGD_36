import React from 'react'
import './savanna.css'

class Scroller5 extends React.Component {
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

        if (scrollTop < 4525) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div className={this.state.hasScrolled ? 'Sav7' : 'Sav7b'}>
              <img src={require('../img/Satao.jpg')}/>  
            
            <div className="ElephantText2">
                <p>
                    However, due to poaching the African elephant has a conversion status of "vulnerable". What for? Their ivory tusks.
                    <br/>
                    <br/>
                    Because of the value that lies in ivory there are now less than 30 African big Tuskers left. Tusker is a nickname given to elephants with remarkably long tusks.
                    <br/>
                    <br/>
                    Kenya's probably largest elephant, Satao (pictured right (photograph by Mark Deeble and Victoria Stone)), whose tusks were so long they almost touched the ground, was killed by poachers on the 30th of May in 2014 at an estimated age of 46.
                </p>
            </div>

            </div>
        )
    }
}
       
export default Scroller5;