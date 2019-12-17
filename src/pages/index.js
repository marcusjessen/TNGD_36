import React from "react"
import Link from 'react-router-dom'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import header from "../components/header"
import Card from '../components/Card'
import TheHero from "../components/TheHero"
import styled from 'styled-components'

const IndexPage = () => (
  <Layout>

      <div class="Cards">
        <h2>  
              Now, choose where you want to go...
            <hr/>
        </h2>
        
          <div class="CardGroup">

            <a href="/savanna-page">

            <Card 
              title="Go on safari"
              image={require('../img/eightc.jpg')}
              />
            </a>

            <a href="/maasai-page">
              <Card
              title="Visit the Maasai"
              image={require('../img/IMG_8710.jpg')}
              />
            </a>

          </div>
 
      </div>

</Layout>
)



export default IndexPage
