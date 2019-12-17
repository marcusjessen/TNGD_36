import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import "./layout.css"
import Card from "../components/Card"
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