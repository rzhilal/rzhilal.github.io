import { Box, Grid, ThemeProvider, Typography, Link, Container } from "@mui/material";
import styled from "styled-components";
import { linkSx } from "../../../constants/sxConstants";
import theme from "../../../hooks/themes";
import MyHeading from "../myHeading";
import {skillList} from './data';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import myImage from "../../../images/me.jpg"
// interface Props {
//   id: string;
// } prop:Props
// import { Icon } from "@material-ui/core";




const StyledImg = styled.img`
    width: 100%;
    opacity: 1;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);

    &:hover,
    &:focus {
      filter: none;
        mix-blend-mode: normal;
      };
`;

function About() {
  return (
    <ThemeProvider theme={theme}>
    <Container id="About" sx={{ marginY: "6rem"}}>
        <MyHeading index="01." myHeading="About Me" />
        <Grid item container  sx={{display: "flex", direction:{xs:"column", md:"row"}}} >
          <Grid item container xs={12} md={7} flexGrow={1} marginY={2} padding={"5px"}>
            <Typography variant="body1" component="p" marginBottom={2} >
              Hello! My name is Rahul and I enjoy exploring new technologies. My
              interest in web development started in 2021 when I decided to try creating web backend-APIs.
              Since then I have tried FastAPI, Django with multiple cloud services.
            </Typography>
            <Typography variant="body1" component="p" marginBottom={2} >
              Fast-forward to today, and I’ve had the privilege of working
               at <Link href="#" onClick={() => window.open("https://junkielabs.in/", '_blank', 'noopener,noreferrer')} underline="none" sx={linkSx}>{' Junkielabs '}</Link>
              , an Open Source Initiative. My main focus these days is building accessible, inclusive products and digital
              experiences at <Link href="#" onClick={() => window.open("https://junkielabs.in/", '_blank', 'noopener,noreferrer')} underline="none" sx={linkSx}>{' Junkielabs '} </Link> for an in-house application.
            </Typography>
            <Typography variant="body1" component="p" marginBottom={2} >
              I also recently ventured into digital art & design.
              &amp; React.
            </Typography>
            <Typography variant="body1" component="p" marginBottom={2}>
              Here are a few <Typography sx={{...linkSx, fontSize: "1.1rem", fontWeight: "bold"}}> technologies </Typography>  I’ve been working with recently:
            </Typography>
            <Grid item justifyContent={"space-between"}>
              {skillList.map((item) => (
                <Chip
                  avatar={<Avatar src={item.logo} sx={{ padding: "8px" }}/>}
                  label={item.skill}
                  variant="filled"
                  onClick={() => window.open(`${item.link}`, '_blank', 'noopener,noreferrer')}
                  sx={{ margin: "15px", padding: "5px", height: "auto", borderRadius: "5px", fontFamily: "monospace", fontSize: "0.9rem" }}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item container xs={12} md={5}  flexGrow={1} 
            sx={{
              paddingY: {xs: 6, sm: 8, md: 3} ,
              paddingX: {xs: 0, sm: 6, md: 3} ,
              // border: '1px dashed grey',, border: '2px solid grey'
              justifyContent: "center",
            }} 
          >
            <Box sx={{objectFit: "contain", justifyContent: "center", maxWidth: { xs: "60%", md: "300px" }}}>
              <StyledImg src={myImage} />
            </Box>
          </Grid>
        </Grid>
    </Container>
    </ThemeProvider>
  );
}

export default About;