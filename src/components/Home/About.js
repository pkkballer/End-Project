import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="เกี่ยวกับ" subtitle="เว็บไซด์" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>HELPFORDOG</h4>
          <p>
          เว็บไซด์สำหรับเผยแพร่ข้อมูลข่าวสารที่เกี่ยวข้องกับสุนัข
          </p>
          <p>
         ข้อมูลสถานที่สำหรับการบริจาคโลหิตสุนัข ข่าวสารและความรู้ในการดูแลสุนัข
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
