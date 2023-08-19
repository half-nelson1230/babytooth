import React from 'react';
import {GlobalStyle, Container, ShowDate, ContentBig, ContentLil, ContentBlock, Biggy} from 'styles/globalStyles';
import styled from 'styled-components';
import {Link, RichText } from 'prismic-reactjs';
import Layout from 'layouts/index'
import {graphql} from 'gatsby'

const ImgHold = styled.div`
column-count: 3;
column-gap: 20px;

@media(max-width: 900px){
  column-count: 2;
}

img{
max-width: 100%;
margin-bottom: 20px;
position: relative;
}
`

const ContentBlock2 = styled(ContentBlock)`
align-items: center;
h4{
  text-align: center;
  width: 100%;
}

h3{
  font-size: 36px;
  line-height: 42px;
}
`


// doc contains the document content
export const Photos = ({data}) =>{
    const pics = data.prismicPhotos.data.image
    const photo = pics.map(function(photo, index) {
        return (
          <a href={photo.pic.url} target="_blank"><img src={photo.pic.url}/></a>
        );
      });




    return(
      <Layout>
      <ContentBlock/>
      <ContentBlock>
      <ContentBig><h2>Photos</h2>
      </ContentBig>
      </ContentBlock>
      <ContentBlock>
      <ImgHold>
      {photo}
      </ImgHold>
      </ContentBlock>
      </Layout>
    )
  }

  export const query = graphql`
  query PhotoQuery {
  prismicPhotos {
    data {
      image {
        pic {
          url
        }
      }
    }
  }
}

  `

  export default Photos
