
import React, { useContext, useState } from 'react'
import HeaderSmall from '~/components/nav/navSmall.js'
import Header from 'components/nav/index.js'
import Footer from '~/components/footer/index.js'
import GlobalStyle, {Container} from '~/styles/globalStyles.js'
import styled from 'styled-components'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import {Helmet } from "react-helmet"




const Layout = ({ children }, props) => {
  const breakpoints = useBreakpoint();

  return (
    <>
    <Helmet>
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
    </Helmet>
    <Container>
    {breakpoints.sm ? <HeaderSmall/> : <Header/>}
    {children}
    </Container>
    <Footer/>
    </>
  )
}



export default Layout
