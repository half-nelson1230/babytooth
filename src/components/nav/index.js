import React from 'react';
import {GlobalStyle, Container} from '~/styles/globalStyles';
import styled from 'styled-components';


const Nav = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin: 0;
padding: 0;
flex-wrap: wrap;

@media(max-width: 700px){
  justify-content: center;

}
`

const Logo = styled.h1`
  font-size: 40px;
  font-weight: 500;
`

const BigNav = styled.div`

`

const Links = styled.div`
display: flex;
font-size: 18px;
text-transform: uppercase;


ul{
  display: flex;
  margin-top: 24px;
  font-style: italic;
  :after{
    content: '//'
  }

  li{
    margin-right: 20px;
    font-style: italic;
  }
}

ul+ul{

  :after{
    content: ''
  }

  margin-left: 20px;
}
`

const Header = (props) => {

return(
<BigNav>
  <Nav>
    <a href="/"><Logo>Babytooth</Logo></a>
    <Links>
      <ul>
        <a href='/shows'><li>Shows</li></a>
        <a href="mailto:hi@babytooth.band"><li>Contact</li></a>
        <a href="/photos"><li>Photos</li></a>
        <a href="/album"><li>Music</li></a>
      </ul>

      <ul>
        <a href="https://www.facebook.com/babytoothband/" target="_blank"><li>fb</li></a>
        <a href="https://www.instagram.com/bb__tt__hh" target="_blank"><li>ig</li></a>
        <a href="https://babytoothmusic.bandcamp.com" target="_blank"><li>bc</li></a>
      </ul>
    </Links>
  </Nav>
</BigNav>
)
}


export default Header
