import React, {useRef} from 'react';
import {GlobalStyle, Container} from '~/styles/globalStyles';
import styled from 'styled-components';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import mailIcon from 'images/bb2th_envelope.svg'

const url = "//band.us4.list-manage.com/subscribe/post?u=37956550799b6f1a3fd44b236&amp;id=e03fd2ece7";

const SimpleForm = () => <MailchimpSubscribe url={url}/>

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      {status === "sending" && <p>sending...</p>}
      {status === "error" && (
        <p dangerouslySetInnerHTML={{ __html: message }}/>
      )}
      {status === "success" && (
        <p
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
        {status === null && <p>Join our mailing list to keep in touch. We’ll never spam ya!</p>}

        <Mailchimp>
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <button onClick={submit}>
        Submit
      </button>
      </Mailchimp>
    </div>
  );
};

const Footy = styled.div`
width: 95%;
padding: 30px 2.5% 15px;

background-color: #000;
bottom: 0;

color: #EFEEEd;


@media(max-width: 700px){
  justify-content: center;
}
p{
  font-style: italic;
  font-size: 14px;
  width: 100%;
  @media(max-width: 700px){
    text-align: center;
  }
}
ul{

  @media(max-width: 700px){
    width: 100%;
    margin-top: 20px;
  }
  li{
    font-style: italic;
    text-align: right;
    font-weight: normal;
    line-height: 32px;

    @media(max-width: 700px){
      text-align: center;
    }
  }
}

div{

}
`

const Mailchimp = styled.div`

  width: 400px;
  border: 2px solid;
  height: 40px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  @media(max-width: 700px){
    width: 100%;
  }

  input{
    width: 100%;
    padding-left: 10px;
  }

  button{
    padding: 0 10px;
    border-left: 2px solid #fff;
    background: #fff;
    color: #000;
  }
`

const Envelope = styled.img`
width: 30px;
margin-top: 5px;
`

const Sm = styled.div`
display: flex;


@media(max-width: 700px){
  justify-content: center;
  margin-top: 20px;
}

h4{
  padding: 8px;
  font-size: 13px;
  font-style: italic;
  border: 2px solid;
  line-height: 10px;
  margin-left: 14px;
  border-radius: 400px;

}
`

const Copyright = styled.h5`
  font-style: italic;
  width: 100%;
  text-align: center;
  margin-top: 16px;
`
const FootyContent = styled.div`
width: 100%;
margin: 0 auto;
max-width: 1200px;
justify-content: space-between;
display: flex;
flex-wrap: wrap;
align-items: center;

`

const Footer = () =>{




  return(
    <Footy>
    <FootyContent>
    <GlobalStyle/>
    <div>

      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />


    </div>
    <Sm>
    <a href="mailto: hi@babytooth.band"><Envelope src={mailIcon}/></a>
    <a href="https://www.facebook.com/babytoothband/" target="_blank"><h4>fb</h4></a>
    <a href="https://www.instagram.com/bb__tt__hh" target="_blank"><h4>ig</h4></a>
    <a href="https://babytoothmusic.bandcamp.com" target="_blank"><h4>bc</h4></a> 
    </Sm>
    <Copyright>© 2023 Babytooth. Design & Development by <a href="https://mynameis.al" target="_blank">Al Nelson</a>. Development help from Annie Fifer.</Copyright>
    </FootyContent>
    </Footy>


  )
}

export default Footer;
