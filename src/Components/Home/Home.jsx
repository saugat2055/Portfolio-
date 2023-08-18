import React from 'react'
import './home.css'
import video from '../../Assets/prod.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {BsListUl} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

const Home = () => {
  return (
    <section className ='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
            <font color= "Skyblue"><font size="5">Our Packages</font></font>
          </span>

          <h1 className="homeTitle">
          <font color= "Orange"> Search your Holiday </font>
          </h1>

        </div>

        <div className="travelerName">
          <div className="nameInput">
            <label htmlFor="name"><font size="3"> Enter Your name </font></label>
            <div className="input flex">
              <font size="1"><input type="text" placeholder='enter name here..'/></font>
            </div>
          </div>
        </div>

        <div className="cardDiv grid">
          <div className="destinyInput">
            <label htmlFor="city"><font size ="3"><font color="black">Search your destination: </font></font></label>
            <div className="input flex">
              <font size = " 1"><input type="text" placeholder='enter destination here...'/></font>
              <GrLocation className="icon"/>
            </div>
          </div>
          
          <div className="dateInput">
            <label htmlFor="date"><font size ="3"><font color=" black"> Select your date: </font> </font></label>
            <div className="input flex">
              <font size = " 2"><input type="date" /></font>
              
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <font color="black"><font size = '3'> <h4 className="total">$5000</h4></font></font>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000"/>
            </div>
          </div>
          <div className="searchOptions flex">
          <a href="https://www.skyscanner.com/flights-to/np/cheap-flights-to-nepal.html" className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
            </a>
          </div>

        </div>



        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
         </div>

          <div classname="leftIcons">
          <BsListUl className="icon"/>
          <TbApps className="icon"/>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Home