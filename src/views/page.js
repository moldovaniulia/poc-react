import React from 'react'
import Helmet from 'react-helmet'

import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>poc</title>
        <meta property="og:title" content="poc" />
      </Helmet>
      <h1>Heading</h1>
    </div>
  )
}

export default Page
