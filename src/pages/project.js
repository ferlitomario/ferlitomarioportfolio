import * as React from "react"
import Header from '/src/components/Header/header.js'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image1 from '/src/images/site1.png';
import image2 from '/src/images/background.jpg';
import image3 from '/src/images/IA.png';


const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)


const projectsData = [
  {
    img: image1,
    title: "NFT and Smart-Contract",
    description:"I developed this site to experiment and increase my knowledge of how a smart contract develops and how it interacts with the blockchain.I used solidity for the smart-contract and ganache to test it.",
    Url: "https://github.com/ferlitomario"

  },

  {
    img: image2,
    title: "Linux-OS Projects ",
    description:"I have developed several projects for university courses in Linux using the c language or using the SHELL.",
    Url: "https://github.com/ferlitomario"

  },
  {
    img: image3 ,
    title: "OpenAI-API ",
    description:"I created a chat-GPT clone using openAI's API.After entering the data in the prompt the image of the request will be displayed",
    Url: "https://github.com/ferlitomario"

  }
  
]



const SecondPage = () => (
  
  <Layout>
     <h1 style={{textAlign: "center",fontFamily:"BhuTuka Expanded One"}}>My Project</h1>
     <div className="card-container" style={{height:'50%',width:'90%',display: "grid",gridTemplateColumns: "repeat(auto-fit, minmax(35%, 1fr))",gap: "3rem", margin: "3rem"}}>
     
    {projectsData.map((data,index) => (
      <Card key={index} sx={{  margin:"3rem",height:'200'}}>
        <CardActionArea>
          <CardMedia >
          <img src={data.img} alt="..." style={{ width: '100%',height:'100%',objectfit:'cover' }} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"Alfa Slab One"}}>
              {data.title}
            </Typography>
            <Typography variant="h6" color="balck" style={{fontFamily:"Allerta Stencil"}}>
              {data.description}
            </Typography>
          </CardContent>
          </CardActionArea>
        <CardActions>
        </CardActions>
        <Button size="medium" color="primary" href={data.Url} position="absolute">
            REPO
          </Button>
        </Card>
    ))}
  </div>
  </Layout>
);

export default SecondPage;

  
  

