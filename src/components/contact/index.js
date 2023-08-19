import React from 'react';
import {GlobalStyle, Container, ContentBlock, ContentBig, ContentLil} from '~/styles/globalStyles';
import styled from 'styled-components';

const Contact = () => {

const ContactHold = styled.div`
width: 100%;
margin-bottom: 20px;
padding-bottom: 10px;
border-bottom: 2px solid;
`

const ContactSub = styled.h4`
font-size: 18px;
font-style: italic;

@media(max-width: 700px){
  text-align: center;
}
`

const ContactMain = styled.h3`
font-size: 32px;
font-weight: 500;
@media(max-width: 700px){
  text-align: center;
  font-size: 24px;
}
`

const Socials = styled.ul`
display: flex;

@media(max-width: 700px){
  justify-content: center;
}

li{
  padding: 10px;
  font-style: italic;
  border: 2px solid;
  line-height: 12px;
  margin-right: 10px;
  border-radius: 400px;
}
`

return(
<ContentBlock>
  <ContentLil><h2>Contact</h2></ContentLil>
  <ContentBig>
    <ContactHold>
    <ContactSub>booking, press, everything</ContactSub>
    <a href="mailto:hi@babytooth.band"><ContactMain>hi@babytooth.band</ContactMain></a>
    </ContactHold>
    <Socials>
    <a href="https://www.facebook.com/babytoothband/" target="_blank"><li>fb</li></a>
    <a href="https://www.instagram.com/bb__tt__hh" target="_blank"><li>ig</li></a>
    <a href="https://babytoothmusic.bandcamp.com" target="_blank"><li>bc</li></a>
    </Socials>
  </ContentBig>
</ContentBlock>
)
}

export default Contact
