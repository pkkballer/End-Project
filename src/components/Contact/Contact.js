import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"
const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="ติดต่อ" subtitle="เรา" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/xnqpajvl"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">ชื่อ</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="ชื่อ"
            />
          </div>
          <div>
            <label htmlFor="email">อีเมล์</label>

            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="อีเมล์"
            />
          </div>
          <div>
            <label htmlFor="message">ข้อความ</label>

            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="ข้อความ"
            />
          </div>
          <div>
            <input
              type="submit"
              value="ส่ง"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
