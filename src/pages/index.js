import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Hero from '../components/hero';
import Search from '../components/search';
import RestaurantList from '../components/restaurant';
import Footer from '../components/footer';
import Nav from '../components/nav';

const Main = ({ data }) => {
  const restaurants = data.allContentfulRestaurant.edges;
  const imageUrl = data.allContentfulHero.edges.find(element => element.node.name === 'Home').node.image.file.url;
  const [searchTerm, setSearchTerm] = useState(undefined);
  return (
    <main>
      <Nav />
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description}></meta>
      </Helmet>
      <Hero src={imageUrl}></Hero>
      <div className="bg-light py-5">
        <Container>
          <Search setSearchTerm={setSearchTerm} />
          <RestaurantList restaurants={restaurants} searchTerm={searchTerm} />
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default Main;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulRestaurant {
      edges {
        node {
          name
          image {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          location {
            lat
            lon
          }
          link
          tags
          deliveryHours {
            Monday {
              open
              closed
            }
            Tuesday {
              open
              closed
            }
            Wednesday {
              open
              closed
            }
            Thursday {
              open
              closed
            }
            Sunday {
              open
              closed
            }
            Saturday {
              open
              closed
            }
            Friday {
              open
              closed
            }
            Everyday {
              open
              closed
            }
          }
        }
      }
    }
    allContentfulHero {
      edges {
        node {
          name
          image {
            file {
              url
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
