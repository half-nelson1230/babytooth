import styled from 'styled-components';

const Bigimage = styled.img`
width: 100%;
height: 100%;
border: 2px solid;
`

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
padding-top: 60px;
`

const Links = styled.div`
display: flex;
font-size: 18px;
text-transform: uppercase;
flex-wrap: wrap;

@media(max-width: 700px){
text-align: center;
justify-content: center;
line-height: 20px;
margin: 0;
width: 100%;
}


ul{
  display: flex;
  margin-top: 24px;
  font-style: italic;
  :after{
    content: '//'
  }

@media(max-width:700px){
  justify-content: center;
  flex-wrap: wrap;
  margin-left:10px;
  :after{
    content:''
  }
  li{
    margin-right: 10px !important;
  }
}

  li{
    margin-right: 20px;
    font-style: italic;
    :hover{
      cursor: pointer;
    }
  }
}

ul+ul{

  :after{
    content: ''
  }

  margin-left: 20px;

}
`

export {Bigimage}
