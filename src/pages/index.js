import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FeaturedDonations from "../components/Home/FeaturedDonations"
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="หน้าแรก"/>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="HELPFORDOG"
        info="เว็บไซด์สำหรับเผยแพร่ข้อมูลข่าวสารที่เกี่ยวข้องกับสุนัข"
      >
        <AniLink fade to="/donations" className="btn-white">
        ไปช่วยเหลือสุนัขกัน
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedDonations />
  </Layout>
)
export const query = graphql`
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
