import React from "react"
import styled from "styled-components"
import Layout from "../styles/Layout"

import "../styles/global.css"

import hammock from "../../public/Group 1.png"

const StyledHomePage = styled.div`
  margin-top: 5rem;
  padding-left: 4rem;
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-gap: 3rem;
`

const StyledTitle = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: ${props => props.theme.primaryHover};
`

const StyledBodyText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: hsl(35, 71%, 74%);
  line-height: 1.5rem;
`

export default () => (
  <Layout>
    <StyledHomePage>
      <div>
        <StyledTitle>Hammock Thoughts</StyledTitle>
        <StyledBodyText>
          My name is Guy Warburg and this is my site. I'm still in the hammock
          but I hope to post some stuff real soon.
        </StyledBodyText>
      </div>
      <img src={hammock} />
    </StyledHomePage>
  </Layout>
)
