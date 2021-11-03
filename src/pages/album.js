import React, {useState, useRef, createRef} from 'react';
import {GlobalStyle, Container, ContentBlock, ContentBig, ShowDate, ContentLil, Biggy} from 'styles/globalStyles';

import styled from 'styled-components';
import Player from 'components/player/index'
import Layout from 'layouts/index'
import { Date, Link, RichText } from 'prismic-reactjs';
import {graphql} from 'gatsby'


const AlbumContain = styled.div`
display: flex;
width: 100%;
align-items: center;
height: calc(100vh - 240px);

@media(max-width:700px){
  padding-bottom:0px;
  margin: 20px 0 50px 0;
  height: auto;
  min-height: calc(100vh - 320px);
}
`

const Playerhold = styled.div`
width: 100%;

p{
  font-size: 20px;
  margin-top: 30px;

  @media(max-width: 1000px){
    font-size: 16px;
  }
  @media(max-width: 700px){
    font-size:16px;
  }
}
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

const Album = ({data}) => {
  const albumData = data.prismicAlbum.data
  console.log(albumData.song)
  return (
  <Layout>

      <GlobalStyle/>
      <AlbumContain>
      <Playerhold>
      <Player
      list={albumData.song}
      bcText={albumData.bandcamp_text}
      bcLink={albumData.bandcamp_link.url}
      albumTitle={albumData.album_title.text}
      albumPara={albumData.album_paragraph.richText}
      />
      </Playerhold>
      </AlbumContain>

  </Layout>
  )
}

export const query = graphql`
query AlbumQuery {
  prismicAlbum {
    data {
      bandcamp_text
     bandcamp_link {
       url
     }
      song {
        song_link {
          url
        }
        song_title
      }
      album_title {
        raw
        text
      }
      album_paragraph {
        html
        richText
      }
      album_image {
        url
      }
    }
  }
}

`


export default Album
