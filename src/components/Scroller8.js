import React from 'react'
import './savanna.css'

class Scroller8 extends React.Component {
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

        if (scrollTop < 6050) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div className={this.state.hasScrolled ? 'Kenyatta' : 'Kenyatta2'}>
            
            <div className="Ivory">
                <h1> 
                  "For us, ivory is worthless 
                  <br/>
                  unless it is on our elephants." 
                 <hr/>
                </h1>

            </div>

            </div>
        )
    }
}
       
export default Scroller8;