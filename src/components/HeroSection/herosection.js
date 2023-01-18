import React from 'react'
import styled from 'styled-components'
import pdfFile from '/static/CV-FerlitoMario copia.pdf';
import Button from '@mui/material/Button';
import './herosection.css';
import GitHubIcon from '/src/images/github.png';
import twitter from '/src/images/twitter.png';
import linkedin from '/src/images/linkedin.png';
import {Link} from 'gatsby';


const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
`

const HeroInfo = styled.div`
  width: 90%;
  text-align: left;
  padding-right: 2rem;
`

const HeroTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 2rem;
  
`

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;

`



function DownloadButton() {
  return (
    <Button variant="contained" onClick={() => {window.location.href= pdfFile;}}>
      Download CV
    </Button>
  );
}

const Hero = () => {
  
  return (
    <div>
    <HeroWrapper>
      <HeroInfo>
        
        <HeroTitle style={{fontFamily:"Allerta Stencil"}}>Hi, My name is Mario 👋 <br />
        I'm a junior developer.
        </HeroTitle>

     <HeroSubtitle style={{fontFamily:"Allerta Stencil"}}>
     I am passionate about web development, web3.0, blockchain <br />
     and smart contract development.
        </HeroSubtitle>

       <DownloadButton />
      </HeroInfo>
    </HeroWrapper>

    <Link style={{padding:"2rem",margin:"0px"}} >
      <a href="https://github.com/ferlitomario" > <img src={GitHubIcon} alt="github logo" />
      </a>
      <a href="https://twitter.com/ferlitomario99" > <img src={twitter} alt="twitter logo" />
      </a>
      <a href="https://www.linkedin.com/in/mario-ferlito-06bba6174/" > <img src={linkedin} alt="linkedin logo" />
      </a>
      </Link>

      </div>
  )
}

export default Hero
