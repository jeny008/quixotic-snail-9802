import React from 'react'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <>
    <div id={styles.footer}>
        <div className={styles.upper}>
            <p>bigbasket</p>
            <a href="">About Us</a>
            <a href="">In News</a>
            <a href="">Green bigbasket</a>
            <a href="">Privacy policy</a>
            <a href="">affiliated</a>
            <a href="">tearms and condition</a>
            <a href="">career at bigbasket</a>
            <a href="">bb instant</a>
            <a href="">bb daily</a>
            <a href="">bb blog</a>
            <a href="">bb now</a>
        </div>
        <div>
            <p>Help</p>
            <a href="">FAQs</a>
            <a href="">contact us</a>
            <a href="">bb wallets faqs</a>
            <a href="">bb wallets t-cc</a>
            <a href="">vendor connects</a>
        </div>
        <div>
            <p>Downlod our app</p>
            <img src="https://www.bbassets.com/static/v2566/custPage/build/content/img/Google-App-store-icon.png" alt="google play store logo" />
            <img src="https://www.bbassets.com/static/v2566/custPage/build/content/img/Apple-App-store-icon.png" alt="apple play store logo" />
        </div>
        <div>
            <p>Get social with us</p>
            <div><i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
        </div>

    </div>
    <div id={styles.lower}>
    <table>
        <tr>
            <td>POPULAR CATEGORIES:</td>
            <td>Fruits & Vegetables, Basmati Rice, Green Tea, OTC, Cheese, Dry Fruits, Chocolates & Sweets, Soft Drinks, Energy Drinks, Bakery, Cakes & Dairy, Olive Oils, Foodgrains, Oil & Masala, Sunflower Oils, Liquid Soaps & Bars,</td>
        </tr>
        <tr>
            <td>POPULAR BRANDS:</td>
            <td>Amul, Haldirams , Tropicana, Kelloggs, Dettol, MTR, Bru , McCain, Ariel, Britannia, Nescafe , Colgate, Horlicks, Galaxy, Complan,</td>
        </tr>
        <tr>
            <td>CITIES WE SERVE:</td>
            <td>Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District, Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere, Trichy, Amravati, Raipur, Rajkot, Gwalior, Bareilly, Allahabad, Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural, Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural, Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur Rural, Ranchi, Nashik, Agra, </td>
        </tr>
        <tr>
            <td>PAYMENT OPTIONS:</td>
            <td>
                <span>CASH ON DELIVERY</span>
                <i class="payment payment-card_visa"></i>
                <i class="payment payment-card_mastercard"></i>
                <i class="payment payment-paytm_logo"></i>
                <i class="payment payment-mobikwik_Logo"></i>
                <i class="payment payment-rupay"></i>
                <i class="payment payment-amex"></i>
            </td>
        </tr>
    </table>
    </div>
    <p id={styles.copyright}>Copyright </p>
    </>
  )
}
