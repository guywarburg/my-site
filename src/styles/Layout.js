import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "./theme"

const StyledLayout = styled.div`
  margin: 2rem auto;
  padding: 0 2rem;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledLayout>{children}</StyledLayout>
  </ThemeProvider>
)

export default Layout
