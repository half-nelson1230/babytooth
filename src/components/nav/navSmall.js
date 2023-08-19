import React, {useState} from 'react';
import {GlobalStyle, Container} from '~/styles/globalStyles';
import styled from 'styled-components';


const Nav = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin: 0;
padding: 0;
flex-wrap: wrap;
align-items: center;
li.menu{
  z-index: 2;
  font-size: 24px;
  margin: 0 10px;
  padding: 0 8px;
  font-style: italic;
  :hover{
    cursor: pointer;
  }
}

`

const Top = styled.div`
z-index: 20;
position: fixed;
width: calc(100% - 20px);
display: flex;
justify-content: space-between;
align-items: center;
top: 0px;
padding: 10px 10px 8px;
background-color: #EFEEED;
`

const Logo = styled.h1`
  font-size: 40px;
  font-weight: 500;

`

const BigNav = styled.div`

`
const LinkGroup = styled.div`
position: relative;
`

const Links = styled.div`
position: fixed;
display: flex;
flex-wrap: wrap;
top: 0; left: 0; bottom: 0; right: 0;
background-color: #EFEEED;
z-index: 10;
transition: 0.5s ease-in;
justify-content: center;
align-items: center;
&.shown{
  transform: translateY(-100%);
}


ul{
  margin-top: 24px;
  font-style: italic;
  width: 100%;

  li{
    text-align: center;
    font-size: 32px;
    margin: 12px;
    font-style: italic;
  }
}

ul.social{
  display: flex;
  justify-content: center;
  margin: 0;
  border-top: 2px solid;
  li{
    display: flex;
    font-size: 18px;
    border: 2px solid;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: 20px 8px;
  }
}


ul.close{
  display: flex;
  justify-content: center;
  margin: 0;
  li{
    display: flex;
    font-size: 42px;
    align-items: center;
    justify-content: center;
    line-height: 0;
    margin-top: 20px;
    :hover{
      cursor: pointer;
    }
  }
}
`

const HeaderSmall = (props) => {

  const [menuVis, menuToggle] = useState(false);
    const menuSwitch = () => {
      menuToggle(!menuVis)
    }

    console.log(menuVis)

return(
<BigNav>
  <Nav>
    <Top>
    <a href="/"><Logo>Babytooth</Logo></a>
    <li className="menu" onClick={menuSwitch}>{menuVis ? 'Close' : 'Menu'}</li>
    </Top>
    <Links className={menuVis ? '' : 'shown'}><LinkGroup>
      <ul>
        <a href='/shows'><li>Shows</li></a>
        <a href="mailto:hi@babytooth.band"><li>Contact</li></a>
        <a href="/photos"><li>Photos</li></a>
        <a href="/album"><li>Music</li></a>
      </ul>

      <ul className="social">
        <a href="https://www.facebook.com/babytoothband/" target="_blank"><li>fb</li></a>
        <a href="https://www.instagram.com/bb__tt__hh" target="_blank"><li>ig</li></a>
        <a href="https://babytoothmusic.bandcamp.com" target="_blank"><li>bc</li></a>
      </ul>

      <ul className="close">
        <li onClick={menuSwitch}>x</li>
      </ul>

    </LinkGroup></Links>
  </Nav>
</BigNav>
)
}


export default HeaderSmall
