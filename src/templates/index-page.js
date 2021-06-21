import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import HeroThumbnail from '../img/hero-thumbnail.png'
import Layout from '../components/Layout'
import SignUp from '../img/sign-up.svg'
import Create from '../img/create.svg'
import Cascade from '../img/cascade.svg'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <section class="hero">
      <div class="hero-body">
        <div className="container is-column">
          <div className="columns ">
            <div className="column is-6">
              <h2 class="title hero-heading">
                Where wholesaling meets group buying.
              </h2>
              <h2 class="subtitle hero-subheading">
                Boost your sales and profit by selling your products in wholesale to your customers as they form a group to chip-in for it!
                <br />  <br /> We're launching on <strong> Q3 2021. 🚀  </strong>
              </h2>
              <a href="/contact" class="button is-large is-warning">Sign-up as a Merchant</a>


            </div>
            <div className="column is-6 has-text-centered">
              <img src={HeroThumbnail} class="hero-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="how-it-works" class="hero is-medium process-section">
      <div class="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <h1 class="section-title">
                How it works.
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-4 entry">
              <img src={SignUp} class="image" />
              <h5 class="title">1. Sign-up as Merchant</h5>
              <p class="description">
                Register with name, email and kind of business. Setup your preferred payment method for pay-outs, shipping information and your ready to list.
              </p>
            </div>
            <div className="column is-4 entry">
              <img src={Create} class="image" />
              <h5 class="title">2. List what products to wholesale.</h5>
              <p class="description">Create a product that is ready for wholesale. Input quantity, upload photo, sale expiration and other details that includes your Cheap In sale.</p>
            </div>
            <div className="column is-4 entry">
              <img src={Cascade} class="image" />
              <h5 class="title">3. Share and let your buyers form as a group to buy.</h5>
              <p class="description">Cascade it to Facebook community, trusted buyers and let them know that your selling your product CHEAPER if they can form a group.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
