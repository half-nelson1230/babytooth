import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.rhap_volume-controls{
  display: none;
}

.DayPicker-Day--hasEvent{
position: relative;
:after{
  content: '';
  display: block;
  position: absolute;
  top: 10px; bottom: 10px; left: 10px; right: 10px;
  border-radius: 50%;
  border: 2px solid;
}

}

input{

}


.DayPicker-Month{
  width: 100%;
}

.DayPicker-Week{
  height: 60px;
}

html {
    scroll-behavior: smooth;

}

body{
  margin: 0;
}

input{
  background: none;
  color: #fff;
  opacity: 1;
  border: none;
}

h1, h2, h3, h4, h5, h6, p, a, li, ul, button, abbr, span, input{
  font-family: zenon, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
  color: inherit;
}

button{
  button-style: none;
  border: none;
}

p{
  font-size: 18px;
}

body{
  background-color: #EFEEED;
  color: #000;
}

.DayPicker{
  width: 100%;
  background: none;
  border: 2px solid;
}

.react-calendar__month-view__weekdays{
  font-size: 12px;
}

.react-calendar__month-view__days__day--neighboringMonth{
  color: #000;
  opacity: 0.5;
}

.react-calendar__month-view__days__day--weekend{
  color: #000;
}

.react-calendar__navigation__arrow{
  font-size: 20px;
}

.react-calendar__tile--active, .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus{
  background:none;

  abbr{
    display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #EFEEED;
  min-width: 3em;
  border-radius: 50%;
  vertical-align: middle;

  :before {
  content:'';
  width: auto;
  padding-bottom: 100%;}
  }
}



.react-calendar__navigation{
  border-bottom: 2px solid;
}


.react-calendar__tile{
  min-height: 4.5em;
  transition: 0.25s;
  overflow: visible !important;
  abbr{
    border-radius: 50%;
  }
}

.react-calendar__navigation button:enabled:hover{
  background: none;
  font-weight: 500;
  transition: 0.25s;
}

.react-calendar__tile:enabled:hover{
  background: none;

  abbr{
    transition: 0.25s;
    display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.1);
  color: #EFEEED;
  min-width: 3em;

  vertical-align: middle;

  :before {
  content:'';
  width: auto;
  padding-bottom: 100%;}
  }
  }
}

.react-calendar__tile--active:hover{
  abbr{
    background-color: #000 !important;
  }
}

h2.false, h4.false{
  display: none;
}

h4.playing{
  font-style: italic;
}

h2.playing{
  font-size: 60px;
  font-style: italic;
  margin-bottom: 20px;

  @media(max-width: 1000px){
    font-size: 38px;
  }

  @media(max-width: 700px){
    font-size: 32px;
  }
}

.rhap_progress-section{
  border: 2px solid;
  padding: 0 10px;
}

.rhap_progress-container{
  height: 36px;
}

.rhap_progress-bar{
  height: 35px;
  background-color: rgba(0,0,0, 0.2)
}

.rhap_progress-indicator{
  height: 34px;
  border-radius: 0;
  top: 0;
  opacity: 1;
  right: 0;
  width: auto;
  background-color:#EFEEED;
  box-shadow: none;
}

.rhap_container{
  background: none;
  box-shadow: none;
  padding: 0;
}

.rhap_additional-controls{
  display: none;
}

.rhap_main-controls{
  @media(max-width: 700px){
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

.rhap_main-controls-button{
  border: 2px solid #000;
  padding: 10px;
  width:100px;
  color: #000;
  margin: 0 6px 0 0;
  font-size: 15px;
  padding-bottom: 30px;
  svg{
    display:none;
  }

  @media(max-width: 700px){
    width: 32%;
    margin: 0;
  }
  }

  .rhap_skip-button[aria-label='Previous']{
    :after{
      content: 'Previous'
    }
  }

  .rhap_skip-button[aria-label='Skip']{
    :after{
      content: 'Next'
    }
  }

  .rhap_play-pause-button[aria-label='Play']{
    :after{
      content: 'Play'
    }
  }

  .rhap_play-pause-button[aria-label='Pause']{
    :after{
      content: 'Pause'
    }
  }
}

.rhap_current-time{
  border-right: 2px solid;
  padding: 10px 10px 10px 0;
  z-index: 1;
}

.rhap_total-time{
  border-left: 2px solid;
  padding: 10px 0 10px 10px;
  z-index: 1;
}

.rhap_progress-container{
  margin: 0;
  z-index: 0;
}

.music-playlist{
  margin-top: 20px;
  position: relative;
  li{
    font-size: 16px;
    font-style: italic;
    margin-right: 40px;
    opacity: 0.5;
    line-height: 0;
    margin: 24px 0 0 20px;
    position: relative;
    :hover{
      cursor: pointer;
    }
  }
  li.playing{
    opacity: 1;
    font-weight: 400;
  }
  span.playing{
    height: 4px;
    width: 16px;
    position: absolute;
    left: -20px;
    top: -2px;
    overflow: visible;
    background-color: #000;
  }

}

a.moreshows{
  span{
  background: none;
  color: #000;
  font-weight: 700;
  outline: 2px solid;
  outline-offset: -2px;
  }

}


a.moreshows2{
  margin-right: 20px;
}




`

export const Biggy = styled.div`
min-height: 100vh;
position: relative;

`

export const Container = styled.div`
width: 95%;
margin: 20px auto;
max-width: 1200px;
`

export const ContentBlock = styled.div`
display: flex;
width: 100%;
padding-bottom: 60px;
margin-top: 60px;
border-bottom: 2px solid;
justify-content: space-between;
align-items: stretch;

flex-wrap: wrap;
`

export const ContentLil = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  @media(max-width: 700px){
    width: 100%;
    justify-content: center;

  }
  h2{
    font-size: 52px;
    text-transform: uppercase;
    font-style: italic;
    line-height: 32px;

    @media(max-width: 700px){
    text-align: center;
    width: 100%;
    font-size: 36px;
    }
  }
`

export const ContentBig = styled.div`
width: 60%;

@media(max-width: 700px){
  width: 100%;
  margin-top: 20px;

  p{
    text-align: center;
  }
}

p{
  margin-bottom: 10px;

}

h2{
  font-size: 52px;
  text-transform: uppercase;
  font-style: italic;
  line-height: 32px;

  @media(max-width: 700px){
  text-align: center;
  width: 100%;
  font-size: 36px;
  }
}
`

export const ShowDate = styled.div`
width: 100%;
align-content: flex-end;

@media(max-width:700px){
  text-align: center;
  margin-bottom:20px;

  h4{
    margin-top: 15px;
  }
}

h4{
  font-size: 24px;
  font-style: italic;
  margin-bottom: 10px;
}
h3{
  font-weight: 500;
  font-size: 48px;
  margin-bottom: 20px;
  line-height: 54px;
}

h5{
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 30px;
}

span{
  width: 100%;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  font-style: italic;
  position: relative;
  padding: 10px 40px;
  margin-bottom: 10px;
  display: inline;
  font-weight: 400 !important;
}

`

export const ShowDateHome = styled(ShowDate)`

div{
  display:flex;
  flex-wrap:wrap;
  @media(max-width: 700px){
    justify-content: center;
    width: 100%;
    a{
      margin: 20px 0 ;
      width: 100%;
    }
  }
  a{
    width: 100%:
  }
}
`
