import * as React from "react"
import Header from '/src/components/Header/header.js'
import imgb from '/src/images/avataaars.png';
import Card from '@mui/material/Card';
import GitHubIcon from '/src/images/github.png';
import twitter from '/src/images/twitter.png';
import linkedin from '/src/images/linkedin.png';
import {Link} from 'gatsby';


const Layout = ({ children }) => (
    <>
      <Header />
      {children}
    </>
)

const Aboutpage = () => (
 
 <div>
    <Layout/>

    <h1 style={{textAlign:'center',fontFamily:"BhuTuka Expanded One"}}>BIO</h1>
<div style={{display:"flex",alignitems:"center",justifyContent:"center"}}>
        <Card sx={{width:'70rem',display:"flex",justifyContent:"center"}}> 
    <div style={{display:"flex",flexDirection:"column",margin:"2rem"}}>

        <h1 style={{textAlign:"center", margintop:"4rem",fontFamily:"Alfa Slab One"}}>It's me, Mario!</h1>

           <h3 style={{fontFamily:"Allerta Stencil"}}>Hi, my name is Mario, I'm a computer engineering student at the University of Catania,Sicily. My main passion is coding and I'm interested in technologies like blockchain, web3.0 and computer science in general.<br/>
           <br/>
           Besides my passion for technology, I also have a great passion for football. I like to follow matches and play with friends in my free time.
           </h3>
           <h2 style={{fontFamily:"Alfa Slab One"}}>SKILLS</h2>
           <h4 style={{fontFamily:"Allerta Stencil"}}>
               - PROGRAMMING: C, Java, JavaScript and SQL.<br/>
               <br/>
               - FRONT-END: HTML, CSS, React, Gatsby, SASS.<br/>
               <br/>
               - BACK-END: Nodejs, a little bit of Laravel.<br/>
               <br/>
               - DB:MySQL.<br/>
               <br/>
               - SMARTCONTRACT: Solidity.<br/>
               <br/>
               - OS: MacOS, Windows, Linux.<br/>
               <br/>
           </h4>


    <Link style={{padding:"1.5rem"}}>
    <a href="https://github.com/ferlitomario" > <img src={GitHubIcon} alt="github logo" />
    </a>
    <a href="https://twitter.com/ferlitomario99" > <img src={twitter} alt="twitter logo" />
    </a>
    <a href="https://www.linkedin.com/in/mario-ferlito-06bba6174/" > <img src={linkedin} alt="linkedin logo" />
    </a>
    </Link>

    </div>
   
    <img src= {imgb} alt="..." style={{ width:"50%",height:"70%",display:"flex-end", padding:"3rem"}}/>

    </Card>
</div>
</div>
    
)

export default Aboutpage;
