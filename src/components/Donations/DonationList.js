import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Donation from "./Donation"
import Title from "../Title"

export default class DonationList extends Component {
  state = {
    donations: [],
    sortedDonations: [],
  }

  componentDidMount() {
    this.setState({
      donations: this.props.donations.edges,
      sortedDonations: this.props.donations.edges,
    })
  }

  render() {
    return (
      <section className={styles.donations}>
        <Title title="สถานที่รับบริจาค" subtitle="โลหิต" />
        <div className={styles.center}>
          {this.state.sortedDonations.map(({ node }) => {
            return <Donation key={node.contentful_id} donation={node} />
          })}
        </div>
      </section>
    )
  }
}
