import React from "react"
import styled from "styled-components"
import Layout from "../styles/Layout"

import "../styles/global.css"

const StyledHomePage = styled.div`
  margin-top: 5rem;
  padding-left: 4rem;
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
`

export default () => (
  <Layout>
    <StyledHomePage>
      <StyledTitle>Hi there!</StyledTitle>
      <StyledBodyText>
        My name is Guy Warburg and this is my site.
      </StyledBodyText>
    </StyledHomePage>
  </Layout>
)
