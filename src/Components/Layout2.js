import React from 'react'
import { Strong } from './Strong'
import '../Styling/layout2.css'
import '../Styling/Button.css'
import ContainedButtons from './Navbar/ContainedButtons'
import { DialogContent } from '@mui/material'


export const Layout2 = (props) => {
  return (
    <div className='layout2'>
        
        <div className='outer'>
        <div className='box'>
        <div className='inner'>
        <Strong>  
            <ul className='boxlinks'> 
        <div>
        <li><a href ="#">Location</a></li>
        </div>
        <div>
        <li><a href ="#">Date</a></li>
        </div>
        <div>
        <li><a href ="#">Select a Service</a></li>
        </div>
            </ul>
        </Strong>
        </div>
        </div>
        <div className='box3'>
      <ContainedButtons >Book an Appointment</ContainedButtons>
    </div>
  
        </div>
    </div>
  )
}
