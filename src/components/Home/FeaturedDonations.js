import React from "react"
import Donation from "../Donations/Donation"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getDonations = graphql`
  query {
    featuredDonations: allContentfulHelpfordog(
      filter: { featured: { eq: true } }
    ) {
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

const FeaturedDonations = () => {
  const response = useStaticQuery(getDonations)
  const donations = response.featuredDonations.edges

  return (
    <section className={styles.donations}>
      <Title title="สถานที่รับบริจาค" subtitle="โลหิต" />
      <div className={styles.center}>
        {donations.map(({ node }) => {
          return <Donation key={node.contentful_id} donation={node} />
        })}
      </div>
      <AniLink fade to="/donations" className="btn-primary">
        บริจาคโลหิต
      </AniLink>
    </section>
  )
}

export default FeaturedDonations
