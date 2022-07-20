import React from 'react'
import styles from './homeCS2.module.css'

export const HomeCardSecII = ({imgData2}) => {
  return (
    <div className={styles.topOffer}>
    <div><img src={imgData2[0]} alt="" /></div>
    <div><img src={imgData2[1]} alt="" /></div>
    <div><img src={imgData2[2]} alt="" /></div>
    <div><img src={imgData2[3]} alt="" /></div>
</div>
  )
}
