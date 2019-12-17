import React from "react"
import PropTypes from "prop-types"
import "./savanna.css"

const SLayout = ({ children, data }) => {
   
  return (
    <>
      
      <div>
        <main>
          {children}</main>
        <footer>
   
        </footer>
      </div>
    </>
  )
}

SLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SLayout