import React from "react"
import Image from "gatsby-image"
import styles from "../../css/donations.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Proptypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const  getImage = graphql`
    query {
        file(relativePath: {eq: "defaultBcg.jpeg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Donation = ({ donation }) => {
  const data = useStaticQuery(getImage)
  const img =data.file.childImageSharp.fluid
  const { name, price, country, days, slug, images } = donation
  console.log(data)

  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.donations}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single donation" />
        <AniLink fade className={styles.link} to={`/donations/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            { country || 'default country'}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Donation.propTypes = {
  donation:Proptypes.shape({
    name:Proptypes.string.isRequired,
    country:Proptypes.string.isRequired,
    price:Proptypes.number.isRequired,
    days: Proptypes.number.isRequired,
    image:Proptypes.arrayOf(Proptypes.object).isRequired,
  })
}

export default Donation
