import React from 'react'
import './footer.css'
import video2 from '../../Assets/mountain.mp4'
import {FiSend} from 'react-icons/fi'
import{MdExplore}from 'react-icons/md'
import{AiOutlineTwitter} from 'react-icons/ai'
import{AiFillYoutube}from 'react-icons/ai'
import {FaTripadvisor}from 'react-icons/fa'
import{AiOutlineInstagram} from 'react-icons/ai'
import{FaChevronRight} from 'react-icons/fa'
const Footer = () => {
  return (
    <section  className='footer'>
      <div className="videoDiv">
        <video src={video2} muted  autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH </small>
            <h2>Travel with Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
                 SEND<FiSend className='icon'/>
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <MdExplore className="icon"/>
                <font color="orange">Travel Nepal</font>
              </a>
            </div>

            <div className="footerparagraph">
            Nepal is the country of the Mount Everest, the highest mountain peak in the world, and the Birthplace of Gautama Buddha- Lumbini. Mountaineering and other types of adventure tourism and ecotourism are important attractions for visitors.

            </div>
            <div className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <FaTripadvisor className="icon"/>

            </div>
          </div>


          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY

              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon"/>
                Services
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon"/>
                Aency
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon"/>
                Tourism
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon"/>
                Payment
              </li>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
