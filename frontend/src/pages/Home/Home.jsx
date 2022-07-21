import React from 'react'
import { HomeCardSec } from '../../components/homeCardSec/HomeCardSec'
import { HomeCardSecII } from '../../components/homeCardSec2/homeCardSecII'
import { HomeCatogery } from '../../components/homeCatogery/HomeCatogery'
import { HomeSlider } from '../../components/homeTopSection/HomeSlider'
import {Navbar} from '../../components/navbar/Navbar'
import styles from './Home.module.css'
import {bigbasket_onlineStore,Brand_store,Home_kitchen,Beauty_hygine,
        clean_Household,Snacks_Store,offerBtn,fruitAndvegetable,topOffers,
        Your_Daily_Staples,Beverages,bankOffer} from '../Home/ImageData'
import { Footer } from '../../components/footer/Footer'
import { useEffect } from 'react'

export const Home = () => {

    useEffect(()=>{
        document.title="Online Grocery Shopping and Online Supermarket in India - bigbasket"
    })
  return (
    <div className={styles.home}>
        <Navbar/>
        <HomeSlider/>
        <div className={styles.offerBtn}>
            <div><img src={offerBtn[0]} alt="" /></div>
            <div><img src={offerBtn[1]} alt="" /></div>
            <div><img src={offerBtn[2]} alt="" /></div>
            <div><img src={offerBtn[3]} alt="" /></div>
            <div><img src={offerBtn[4]} alt="" /></div>
            <div><img src={offerBtn[5]} alt="" /></div>
        </div>
        <div className={styles.sectionHeading}>
            <h2>My Smart Basket</h2>
            <button>Show more</button>
        </div>
        <hr />
        <div style={{height:"350px", border:"solid"}}>
            <h1>product slider</h1>
        </div>
        <h2 className={styles.secHead}>Bank Offers </h2>
        <hr />
        <HomeCardSecII imgData2={bankOffer}/>

        <div className={styles.sectionHeading}>
            <h2>My Smart Basket</h2>
            <button>Show more</button>
        </div>
        <hr />
        <div style={{height:"350px", border:"solid"}}>
            <h1>product slider</h1>
        </div>            

        <h2 className={styles.secHead}>Top Offers</h2>
        <hr />
        <HomeCardSecII imgData2={topOffers}/>
        <h2>Fruits & Vegetables</h2>
        <hr />
        <HomeCatogery images={fruitAndvegetable}/>
        <h2 className={styles.secHead}>Your Daily Staples</h2>
        <hr />
        <HomeCardSec imgData={Your_Daily_Staples}/>
        <h2 className={styles.secHead}>Beverages</h2>
        <hr />
        <HomeCatogery images={Beverages}/>
        <h2 className={styles.secHead}>Snacks Store</h2>
        <hr />
        <HomeCardSecII imgData2={Snacks_Store}/>
        <h2 className={styles.secHead}>Cleaning & Households</h2>
        <hr />
        <HomeCardSecII imgData2={clean_Household}/>
        <h2>Beauty & Hygiene</h2>
        <hr />
        <HomeCatogery images={Beauty_hygine}/>
        <h2 className={styles.secHead}>Home & Kitchen Essentials</h2>
        <hr />
        <HomeCardSec imgData={Home_kitchen}/>
        <div style={{height:"350px", border:"solid" }}>
            <h1>slider</h1>
        </div>
        <h2 className={styles.secHead}>Brand Store</h2>
        <hr />
        <HomeCardSec imgData={Brand_store}/>
        <div className={styles.bigbasketstory}>
            <p>bigbasket – online grocery store</p>
            <p>{bigbasket_onlineStore.para1}</p>
            <p>{bigbasket_onlineStore.para2}</p>
            <ul>
            <li>{bigbasket_onlineStore.li1}</li>
            <li>{bigbasket_onlineStore.li2}</li>
            <li>{bigbasket_onlineStore.li3}</li>
            </ul>
        </div>
        <Footer/>

    </div>
  )
}
