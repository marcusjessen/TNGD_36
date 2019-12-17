import React from 'react'
import './savanna.css'

class Scroller4 extends React.Component {
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

        if (scrollTop < 3775) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div className={this.state.hasScrolled ? 'Sav6' : 'Sav6b'}>
              <img src={require('../img/IMG_4138c.jpg')}/>  
            
            <div className="ElephantText">
                <p>
                    The elephant
                    <hr/>
                    <br/>
                    There are two types of elephants: the African and the Asian elephant. Kenya is, of course, home to the former.
                    <br/>
                    <br/>
                    The African elephant is the largest mammal on land and can live up to 70 years of age. There are approximately 415, 000 African elephants alive today, and they inhabit most African countries.
                </p>
            </div>

            </div>
        )
    }
}
       
export default Scroller4;