import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Donations from "../components/Donations/Donations"
import SEO from "../components/SEO"

export default class donation extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Donation" />
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        <Donations />
      </Layout>
    )
  }
}

export const query =graphql` 
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
