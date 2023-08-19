import React from 'react';
import {GlobalStyle, Container, ShowDateHome, ContentBig, ContentLil, ContentBlock} from '~/styles/globalStyles';
import styled from 'styled-components';
import Moment from 'moment';
import {graphql} from 'gatsby'

import {Link, RichText } from 'prismic-reactjs';



// doc contains the document content
export const ShowCard = (props) =>{



  return(
    <ShowDateHome>
    <h4>{Moment(props.showdate).format('LL')}    ·   {props.city}</h4>
    <h3>{props.lineup}</h3>
    <h5>{props.venue} · {props.time}</h5>
    <div>
    {props.event_link ? <a href={props.event_link} class="moreshows2"><span>{props.eventText}</span></a> : null}
    <a class="moreshows" href='/shows'><span>More Shows</span></a>
    </div>
    </ShowDateHome>  )
  }

export const query = graphql`
  query ShowsQuery {
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

  export default ShowCard
