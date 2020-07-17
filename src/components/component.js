import React from 'react'
import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.src} className={styles.image} />
    </div>
  )
}

AppComponent.defaultProps = {
  src: '/playground_assets/png-1000w.png',
}

AppComponent.propTypes = {
  src: PropTypes.string,
}

export default AppComponent
