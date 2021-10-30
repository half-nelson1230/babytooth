
import React, { useContext, useState } from 'react'
import Header from '~/components/nav/index.js'
import Footer from '~/components/footer/index.js'
import GlobalStyle, {Container} from '~/styles/globalStyles.js'
import styled from 'styled-components'





const Layout = ({ children }, props) => {
  return (
    <>
    <Container>
    <Header/>
    {children}
    </Container>
    <Footer/>
    </>
  )
}



export default Layout
