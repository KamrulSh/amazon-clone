import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        // display home background and product in the body section
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
                <div className="home__row">
                    <Product
                        id="123456"
                        title="Apple MacBook Pro MD101LL/A 13.3-inch Laptop (2.5Ghz, 4GB RAM, 500GB HD) (Renewed)"
                        price={1552.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71qVOM%2BlgnL._AC_SL1500_.jpg"
                        rating={4} />
                    <Product
                        id="223456"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={4} />
                </div>
                <div className="home__row">
                    <Product
                        id="323456"
                        title="NUBWO Gaming headsets PS4 N7 Stereo Xbox one Headset Wired PC Gaming Headphones for PC/MAC/PS4/Xbox one"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61LnVrrFyhL._AC_SL1200_.jpg"
                        rating={2} />
                    <Product
                        id="423456"
                        title="USB Wall Charger, LUOATIP 3-Pack 2.1A/5V Dual Port USB Cube Power Adapter Charger Plug Charging Block Replacement for iPhone Xs/XR/X, 8/7/6 Plus, Samsung, LG, HTC, Moto, Android Phones"
                        price={12.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61RjldYuSEL._AC_SL1500_.jpg"
                        rating={3} />
                    <Product
                        id="523456"
                        title="Portable Blender, Personal Size Blender Smoothies and Shakes, Mini Blender 4000mAh USB Rechargeable with Six Blades, Handheld Blender Sports,Travel,Gym (Blue)"
                        price={429.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61M7iOFsTFL._AC_SL1500_.jpg"
                        rating={4} />
                </div>
                <div className="home__row">
                    <Product
                        id="623456"
                        title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity, Black (2019)"
                        price={552.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
                        rating={5} />
                </div>
            </div>


        </div>
    )
}

export default Home
