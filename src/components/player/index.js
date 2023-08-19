import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Date, Link, RichText } from 'prismic-reactjs';

const Flexo = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
flex-wrap: wrap;
ul{}
`

const AlbumImage = styled.img`
width: 30%;
min-width: 320px;
outline: 2px solid;

@media(max-width: 700px){
  width: 100%;
  margin: 20px 5px 20px;
}
`

const Playee = styled.div`
width: 60%;
h2{
  font-size: 42px;
}

h4{
  margin-bottom: 15px;
}
@media(max-width: 1000px){
  width: calc(100% - 360px);
}

@media(max-width: 700px){
  width: 100%;
}
`

const Listee = styled.div`
width: 30%;

@media(max-width: 1000px){
  width: 100%;
}

@media(max-width: 700px){
  width: 100%;
  justify-content: flex-start;
  margin-left: 8px;
}
`

const AlbumBc = styled.div`
display: flex;
width: 100%;
align-items: center;
h4{
  margin: 0 0 -10px 10px;
  :before{
    content: " - "
  }
}
`




const Player = (props) => {
  const playlist = props.list

  const testList = props.list
  console.log(testList)
  const [currentMusicIndex, setMusicIndex] = useState(0)
  const isitplaying = useState(false)

  const handleClickPrevious = () => {
    setMusicIndex(currentMusicIndex === 0 ? playlist2.length - 1 : currentMusicIndex - 1)
  }
  const handleClickNext = () => {
    setMusicIndex(currentMusicIndex < playlist2.length - 1 ? currentMusicIndex + 1 : 0)

  }

  const references = playlist.map(function(song, index) {
      return (
        <li key={index}>{song.song_title}</li>
      );
    });

    console.log(references)

  const playlist2 = playlist.map(song => {
    return {
      name: song.song_title,
      src: song.song_link.url,
    }
  })


return(

  <Flexo>


  <Playee>
  <AlbumBc>
  <h2>
        {props.albumTitle}
  </h2>
  <a href={props.bcLink} target="_blank"><h4>{props.bcText}</h4></a>
  </AlbumBc>
{playlist2.map((song, i) => (
<div>


<h4 className={`${currentMusicIndex === i && 'playing'}`}>{currentMusicIndex + 1}/{playlist2.length} - {song.name}</h4>

</div>
  ))}



  <AudioPlayer
         showSkipControls={true}
         showJumpControls={false}
         showLoopControl={false}
         showVolumeControl={false}
         onClickPrevious={handleClickPrevious}
         onClickNext={handleClickNext}
         onEnded={handleClickNext}
         src={playlist2[currentMusicIndex].src}
         autoPlay={isitplaying}
       >

       </AudioPlayer>
       <RichText render={props.albumPara}/>

       </Playee>
       <Listee>
       <div className="music-playlist">
                   <ul>
                     {playlist2.map((song, i) => (


                       <li
                         role="menuitem"
                         tabIndex={0}
                         onClick={() => setMusicIndex(i)}
                         onKeyPress={() => {}}
                         key={i}
                         className={`${currentMusicIndex === i && 'playing'}`}
                       ><span className={`${currentMusicIndex === i && 'playing'}`}/>
                         {currentMusicIndex === i && <i className="fa fa-play" aria-hidden="true"></i>}&nbsp;
                         {song.name}
                      </li>

                     ))}
                   </ul>
                 </div>
                 </Listee>
    </Flexo>

)}
export default Player
