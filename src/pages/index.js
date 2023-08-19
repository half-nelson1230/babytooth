import React, { useRef } from 'react';
import {GlobalStyle, Container, ContentBlock, ContentBig, ShowDate, ContentLil, Biggy} from '~/styles/globalStyles';
import {Bigimage} from '~/styles/homeStyles'
import Layout from '~/layouts/index'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import ShowCard from '~/components/showCard/index'
import Contact from '~/components/contact/index'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 60);

const Homepage = ({data}) => {
  const doc = data.prismicHomepage.data

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  const showRef = useRef(null)
  const executeScroll2 = () => scrollToRef(showRef)

  const contactRef = useRef(null)
  const executeScroll3 = () => scrollToRef(contactRef)
  const topShow = data.prismicShows.data.show[0]
  return(
    <Layout>
    <GlobalStyle/>
    <ContentBlock>
    <Bigimage src={doc.main_image.url}/>
  </ContentBlock>

  <ContentBlock ref={myRef}>
        <ContentLil>
        <h2>About</h2>
        </ContentLil>
        <ContentBig>
        <RichText render={doc.about.raw} />

        </ContentBig>
      </ContentBlock>

      <div ref ={showRef}/>
      <ContentBlock>
      <ContentLil>
      <h2>shows</h2>
      </ContentLil>
      <ContentBig>
      <ShowCard
            showdate = {topShow.date}
            city = {topShow.city}
            lineup = {topShow.lineup}
            venue = {topShow.venue}
            time = {topShow.time}
            event_link = {topShow.event_link.url}
            eventText = {topShow.event_text}
      />
      </ContentBig>
      </ContentBlock>

      <div ref={contactRef}>
      <Contact/>
      </div>
    </Layout>
  )}

export const query = graphql`
  query MyQuery {
    prismicHomepage {
      data {
        about {
          richText
          raw
        }
        main_image {
          url
        }
      }
    }
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

export default Homepage
