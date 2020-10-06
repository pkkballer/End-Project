import React from "react"
import DonationsList from "./DonationList"
import { useStaticQuery, graphql } from "gatsby"

const getDonations = graphql`
  query {
    donations: allContentfulHelpfordog {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
const Donations = () => {
  const { donations } = useStaticQuery(getDonations)
  return <DonationsList donations={donations} />
}

export default Donations
