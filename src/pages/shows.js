import React from 'react';
import {GlobalStyle, Container, ShowDate, ContentBig, ContentLil, ContentBlock, Biggy} from '~/styles/globalStyles';
import styled from 'styled-components';
import Moment from 'moment';
import {Link, RichText } from 'prismic-reactjs';
import {graphql} from 'gatsby'
import Layout from 'layouts/index'

const birthdayStyle = `.DayPicker-Day--highlighted {
  background-color: orange;
  color: white;
}`;

const modifiers = {
  hasEvent: [new Date(2020, 1, 19), new Date(2020, 1, 12), new Date(2020, 1, 2)]
};

const ContentBlock2 = styled(ContentBlock)`
align-items: center;
h4{
  text-align: center;
  width: 100%;
}

h3{
  font-size: 36px !important;
  line-height: 42px !important;
}
`

const ShowDate2 = styled(ShowDate)`
text-align: center;
`

// doc contains the document content
export const ShowPage = ({data}) =>{
  const shows = data.prismicShows.data.show
  const show = shows.map(function(show, index) {
      return (
        <ShowDate2>
        <ContentBlock2>
        <ContentLil>
        <h4  key={index}>{Moment(show.date).format('dddd, MMMM Do')}</h4>
        </ContentLil>
        <ContentBig>
        <h3 key={index}>{show.lineup}</h3>
        <h5 key={index}>{show.venue} · {show.time}</h5>
        {show.event_text ? <a key={index} href={Link.url(show.event_link)}><span>{show.event_text}</span></a> : null}
        </ContentBig>
                  </ContentBlock2>
        </ShowDate2>

      );
    });




    return(
        <Layout>
        <ContentBlock>
        <ContentBig><h2>Upcoming Shows</h2>
        </ContentBig>
        </ContentBlock>
        {show}
        </Layout>


    )
  }

  export const query = graphql`
    query ShowQuery {
      prismicShows {
        data {
          show {
            event_link {
              url
            }
            city
            date
            lineup
            time
            venue
            event_text
          }
        }
      }
    }
  `

  export default ShowPage
