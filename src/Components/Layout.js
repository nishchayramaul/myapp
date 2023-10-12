import React from 'react'
import Navbar from './Navbar/Navbar'
import Heading from './Heading'
import ContainedButtons from './Navbar/ContainedButtons'
import '../Styling/Layout.css'
import '../Styling/Button.css'
import { Image } from './Image'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../Styling/icons.css'
import { Timing } from './Timing'
import { Address } from './Address'
import { Slash } from './Navbar/Slash'
import mapsimage from '../Resources/google-maps-icon-1580992464.png'


export const Layout = () => {
  return (
    <div className='layout'>
        <Navbar className = "nav">
      <ul className="navlinks">
        <li><a href ="#">Homepage</a></li>
        <li><a href ="#">Services</a></li>
        <li><a href ="#">Locations</a></li>
        <li><a href ="#">Contact</a></li>
      </ul>
       </Navbar>
       <Heading/>
       <div className="btnposition">
       <ContainedButtons className = "btn">Book an Appointment</ContainedButtons>
       </div>
       <div className="callbtnposition">
        <ContainedButtons className = "callbtn"> Call us</ContainedButtons>
       </div>
       <div className="btn2position">{
        <ContainedButtons className ="btn2">Book an Appointment</ContainedButtons>
       }
       <div className='wall'>
        <Image/>
       </div>
        
      <div className='header'>
        <div>
        INGENIEURTEAM  

        </div>
        <div className='desc'>
          DESCRIPTION
        </div>
        
        </div>  


    <div className='insta'> 
    
    <InstagramIcon/>
    
    </div>

    <div className='fb'>
      <FacebookIcon/>
    </div>
    
    <div className='time'>
      <Timing/>
    </div>
    
    <div className='add'>
     <Address/>
    </div>

    <div className='parent'>
    <div className='top'>
    <Slash/>
    </div>
    <div className='toplft'>
     <Slash/>
    </div>
    </div>
    <div className='gmaps'>
    Find us on Google Maps
    </div>
    <div className='mapiconpos'>
    <img className='mapicon' src={mapsimage} alt='maps'/>
    </div>
    <div className='mapstext'>
       Google Maps
    </div>
   
    

       </div>
       
     
    </div>
  )
}
