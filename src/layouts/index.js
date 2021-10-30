
import React, { useContext, useState } from 'react'
import HeaderSmall from '~/components/nav/navSmall.js'
import Header from 'components/nav/index.js'
import Footer from '~/components/footer/index.js'
import GlobalStyle, {Container} from '~/styles/globalStyles.js'
import styled from 'styled-components'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';





const Layout = ({ children }, props) => {
  const breakpoints = useBreakpoint();

  return (
    <>
    <Container>
    {breakpoints.sm ? <HeaderSmall/> : <Header/>}
    {children}
    </Container>
    <Footer/>
    </>
  )
}



export default Layout
