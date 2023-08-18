import React from 'react'
import './main.css'

import{ImLocation}from 'react-icons/im'
import{BsClipboardCheck}from 'react-icons/bs'
import img from '../../Assets/bstt.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/bkt.jpg'
import img4 from '../../Assets/pkh.jpg'
import img5 from '../../Assets/ctw.jpg'
import img6 from '../../Assets/mks.jpg'
import img7 from '../../Assets/ev.jpg'
import img8 from '../../Assets/il.jpg'

const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle:'Basantapur Durbar Square',
    location:'kathmandu',
    grade:'Cultural Site',
    fees:'$500',
    description:'Located just a short walk from Thamel, the popular tourist hub in Kathmandu, Kathmandu Durbar Square, also known as “Basantapur Durbar Square” or “Hanuman Dhoka Durbar Square”, is one of the capital’s most visited landmarks. The site has been recognized as a UNESCO World Heritage Site since 1979. Its historical importance, beautiful Newari architecture and lively bazaars make it a fascinating place to visit.'
    
  },

  {
    id:2,
    imgSrc:img2,
    destTitle:'Shoyambhu',
    location:'kathmandu',
    grade:'Cultural Peace',
    fees:'$400',
    description:'The Swayambhunath Stupa also called Monkey temple is one of the crowning glories of Kathmandu Valley architecture. This perfectly proportioned monument rises through a whitewashed dome to a gilded spire, from where four iconic faces of the Buddha stare out across the valley in the cardinal directions. '
    
  },

  {
    id:3,
    imgSrc:img3,
    destTitle:'Bhaktapur Durbar Square',
    location:'Bhaktapur',
    grade:'Cultural Site',
    fees:'$500',
    description:'Bhaktapur, also called Bhatgaon or Bhādgaon, town, central Nepal, in the Nepal Valley, southeast of Kāthmāndu. Said to have been founded by Rājā Ananda Malla in 865, it was for 200 years the most important settlement in the valley. The old palace in Durbar Square, built in 1700, is well preserved and has beautifully carved woodwork and a finely worked gilt gateway.  '
    
  },

  {
    id:4,
    imgSrc:img4,
    destTitle:'Pokhara',
    location:'Pokhara',
    grade:'Beautiful Scenery', 
    fees:'$1000',
    description:'Many tourists visit Pokhara Valley to see the Himalayan range and lakes. Pokhara International Airport serves to bring local and international tourists to this city. Pokhara is also famous for boating, trekking, rafting, paragliding, zipline and extreme sports like rafting, canoeing and bungee jumping. '
    
  },

  {
    id:5,
    imgSrc:img5,
    destTitle:'Chitwan National Park',
    location:'Chitwan',
    grade:' Adventure park',
    fees:'$800',
    description:'The Chitwan National Park (CNP) is a world heritage property, and it also contains a Ramsar Site – Beeshazari Tal in its buffer zone. The CNP has a history of over 3 decades in park management and a rich experience in resolving conflicts between the park and the people.  '
    
  },

  {
    id:6,
    imgSrc:img6,
    destTitle:'Muktinath',
    location:'Mustang',
    grade:'Mountain Site',
    fees:'$600',
    description:'Muktinath is a Vishnu temple sacred to both Hindus and Buddhists. It is located in Muktinath Valley at the foot of the Thorong La mountain pass in Mustang, Nepal. It is one of the world heighest temple'
    
    
  },

  {
    id:7,
    imgSrc:img7,
    destTitle:'Everest Base Camp',
    location:'Solukhumbhu',
    grade:'Trekking ',
    fees:'$2000',
    description:'Everest Base Camp Trek is a legendary teahouse trek in Nepal, tracing the footsteps of great mountaineers to the base camp of the highest mountain on the planet. What could be more thrilling than following in the footsteps of some of the world’s famous climbers? Let us take you on a classic journey into the beautiful Khumbu region and Sagamartha National Park on the lap of Himalayas. '
    
  },

  {
    id:8,
    imgSrc:img8,
    destTitle:'Chiya Bagan',
    location:'Illam',
    grade:'Scenrity',
    fees:'$600',
    description:'An excellent getaway from city life, Ilam is famous for its tea. It is a district largely covered in tea bushes with a hill town right beside a plantation enjoying views of pristine landscapes made up of sloping tea gardens, mountain streams, dense natural forests, holy sites and unique culture.'
  },

 
]

const Main = () => {
  return (
    <section className='main container section'>
         <div className="secTitle">
          <h3 className ="title">
          ** Most visited destinations**
          </h3>
         </div>

         <div className="secContent grid">

          {
            Data.map(({id,imgSrc,destTitle,location,fees,grade,description})=>{
              return( 
                <div  key={id}
                className="singleDestination">

                  <div className="imageDiv">
                    <img src={imgSrc}  alt="{desttitle}"/>
                    
                    </div>

                    <div className="cardInfo">
                      <h4 className="desTitle">
                        {destTitle}
                      </h4>
                      <span className="continent flex">
                        <ImLocation classname='icon'/>
                        <span className="name">{location}
                         </span>

                      </span>
                      
                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small> +1 </small></span>
                         </div>
                         <div className="price">
                          <h5>{fees}</h5>
                         </div>
                       </div>

                       <div className="desc">
                       <h6><p>{description}</p></h6>
                       </div>

                       <button className= 'btn flex'>
                        Details <BsClipboardCheck className="icon"/>
                       </button>
                    </div>   
                </div>
              )

            })
          }

         </div>

    </section>
  )
}

export default Main
