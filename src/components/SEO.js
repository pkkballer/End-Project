import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUser
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const { siteDesc, siteTitle, siteUrl, image, twitterUser } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "th" }} title={`${title} | ${siteTitle}`}>
      <meta name="descrition" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* twiitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUser} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image " content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
