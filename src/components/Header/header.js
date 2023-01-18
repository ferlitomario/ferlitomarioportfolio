import React from 'react'
import './header.css'
import Avatar from '@mui/material/Avatar';
import {Link} from 'gatsby';
import imgH from '/src/images/MF.png';
import home from '/src/images/icons8-home-page-24.png';
import project from '/src/images/icons8-project-management-24.png';
import contact from '/src/images/icons8-contact-24.png'




const Header = () => (
  <header>
    <div className="logo">
      <Avatar alt="Mario" src= {imgH}sx={{ width: 100, height: 100 }} />
    </div>
    <h1 style={{fontFamily:"BhuTuka Expanded One"}}>Portfolio-Mario</h1>
    <nav>
    <Link to="/">
      <img src = {home} alt ="..."  />
    </Link>
      <Link to="/project">
      <img src = {project} alt ="..."  />
      </Link>
      <Link to="/bio">
        <img src = {contact} alt ="..." />
      </Link>
    </nav>
  </header>
  
)

export default Header
