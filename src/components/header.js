import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

class header extends React.Component {
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

        if (scrollTop > 20) {
            this.setState({ hasScrolled: true })
        }

        else {
            this.setState ({ hasScrolled: false })
        }

    }

    render() {
        return(
            <div class={this.state.hasScrolled ? 'header headerScrolled' : 'header'}>
              <h1>Maasai Mara</h1>

            </div>
        )
    }
}


export default header
