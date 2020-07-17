import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>poc</title>
        <meta property="og:title" content="poc" />
      </Helmet>
      <h1>Heading</h1>
      <AppComponent src="/playground_assets/mae-mu-f_cNyVCExTM-unsplash-1200h.jpg"></AppComponent>
    </div>
  )
}

export default Page
