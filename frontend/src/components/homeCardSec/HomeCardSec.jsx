import React from 'react'
import styles from './homeCS.module.css'

export const HomeCardSec = ({imgData}) => {
  return (
    <div className={styles.staples}>
            <div><img src={imgData[0]} alt="" /></div>
            <div><img src={imgData[1]} alt="" /></div>
            <div><img src={imgData[2]} alt="" /></div>
            <div><img src={imgData[3]} alt="" /></div>
            <div><img src={imgData[4]} alt="" /></div>
            <div><img src={imgData[5]} alt="" /></div>
        </div>
  )
}
