import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className="contact">
            <span>Contact Us :</span> <br />
            Phone : 1234567890 <br />Email : shoppinglyX@gmail.com
        </div>
        <div className="connect">
            <FacebookIcon/> <InstagramIcon/> <XIcon/> <YouTubeIcon/>
        </div>
    </div>
  )
}
