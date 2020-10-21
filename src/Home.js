import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
      <img className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg' alt=""
      />

      <div className="home_row">
      <Product title="21 lessons for the 21st century" price={21.99} image="https://images-na.ssl-images-amazon.com/images/I/71vOyCvUMJL.jpg" rating={4}/> 
      <Product title="Fossil Men's Chronograph Quartz Watch with Leather Strap FS5151" price={110.83} image="https://d1rkccsb0jf1bk.cloudfront.net/products/99992590/main/large/fs5151-1452079383-7757.jpg" rating={4}/>
      <Product title="MURENKING MK-55 Food Stand Mixer, 1200W 8-Speed 5.5L Electric Dough Blender with Double Shaft Stepless Automatic Tilt-Head, Coke Red (Beater, Double Hooks,Whisk, Splash Guard)" price={120.99} image="https://images-na.ssl-images-amazon.com/images/I/71f7LzXfnqL._AC_SL1500_.jpg" rating={4}/>
      <Product title="Echo Plus (2nd Gen), Charcoal Fabric + Philips Hue White bulb E27" price={139.99} image="https://cdn.shopify.com/s/files/1/0368/4207/8348/products/41GDuQbAx_L_590x.jpg?v=1597412782" rating={5}/>
      {/* Product */}
      </div>

      <div className="home_row">
      <Product title="Apple MacBook Pro (16-Inch, 16GB RAM, 1TB Storage) - Space Grey" price={2799} image="https://images-na.ssl-images-amazon.com/images/I/41Y2Vs8NgSL._AC_.jpg" rating={4} />
      <Product title="OnePlus 8 5G 12GB RAM 256GB UK SIM-Free Smartphone with Triple Camera, Dual SIM and Alexa built-in Glacial Green - 2 Years Warranty, Glacial Green​" price={22} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT34dbgIK0TtHTQeObmWuNegyIke8UUCrU4C5CKX1wtEAgIFPsRwTd0htjF6jP-ohMSLkk9Zhpl&usqp=CAc" rating={4}/>
      <Product title="PS4 500GB with 3 PS Hits Game Bundle (PS4) (Exclusive to Amazon.co.uk)" price={222} image="https://m.media-amazon.com/images/I/91zXzCCzN8L.jpg" rating={5}/>
      {/* Product */}
      {/* Product */}
      </div>

      <div className="home_row">
      <Product title="Needs&Gifts 2-3 KG Prime Quality 100% Original Himalayan Crystal Rock Salt Lamp Natural from foothills of the Himalayas Beautifully Hand Craft Comes with Complete Electric fitting Guaranteed" price={22} image="https://images-na.ssl-images-amazon.com/images/I/611Yn1kFlcL._AC_SL1391_.jpg" rating={5}/>
      <Product title="Yankee Candle Tea Light Scented Candles, A Calm and Quiet Place, Pack of 12 [Energy Class A]" price={6.99} image="https://images-na.ssl-images-amazon.com/images/I/711oEr23sdL._AC_SL1500_.jpg" rating={5}/>
      <Product title="Vaultskin Notting Hill Slim Zip Wallet with RFID Protection for Cards Cash Coins (Alpine Green)" price={22} image="https://cdn.shopify.com/s/files/1/0249/5512/5840/products/vaultskin-nottinghill-zip-wallet-rfid-product-green6_2_e48975e7-c693-4155-b1bb-8345283eb701_516x.png?v=1573606807" rating={4}/>
      <Product title="Oral-B iO9 Black Ultimate Clean Electric Toothbrush for Adults with Revolutionary Magnetic Technology, Colour Display, 1 Toothbrush Head, 1 Charging Travel Case, 7 Cleaning Modes" price={249.99} image="https://images-na.ssl-images-amazon.com/images/I/81jg%2B8vzmPL._AC_SL1500_.jpg" rating={4}/>
      {/* Product */}
      {/* Product */}
      {/* Product */}
      </div>

      <div className="home_row">
      <Product />
      <Product />
      {/* Product */}
      
      </div>

      <div className="home_row">
      <Product />
      {/* Product */}
      
      </div>
      </div>
      </div>
    
  )
}

export default Home
