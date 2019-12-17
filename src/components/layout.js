import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import "./layout.css"
import TheHero from "../components/TheHero"

const Layout = ({ children, data }) => {
   
  return (
    <>
      
      <div>
        <main>

        <Header></Header>
        <TheHero></TheHero>
          {children}</main>
        <footer>
   
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout