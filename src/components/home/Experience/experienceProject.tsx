import {  Grid,  ThemeProvider, Typography } from "@mui/material"; 
import styled from "styled-components";
import { Experience } from "./data";
import theme from "../../../hooks/themes";



const StyledImg1 = styled.img`
    width: 100%;
    opacity: 1;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(0.5);
    &:hover,
    &:focus {
        filter: none;
        mix-blend-mode: normal;
      };
`;



function ProjectContent({...project}:Experience) {
    return (
        <ThemeProvider theme={theme}>
        <Grid container item sx={{
            justifyContent: {xs: "flex-start", md: "right"},
            textAlign: {xs: "left", md: "right"},
            padding: {xs: "15px", md: "none"},
            
            }}
        >
            <Grid item textAlign={"inherit"} >
                <Typography component="p" sx={{fontFamily: "monospace", fontSize: "1.2rem", color: "#51bda3", marginY: "10px"}}> Featured Project </Typography>
            </Grid>
            <Grid item container textAlign={"inherit"} sx={{
                backgroundColor: {xs: "none", md: "#ffffffdb"},
                padding: {xs: "none", md: "15px"},
                boxShadow: {xs: "none", md: "0 10px 30px -15px rgb(2 12 28 / 16%)"},
                borderRadius: "5px",
            }}>
            
                <Grid item textAlign={"inherit"}>
                    <Typography variant="h3" component="h3" sx={{ fontWeight:"600", marginBottom: "20px", color: "#4c1818"}}> 
                        {project.name} 
                    </Typography>
                </Grid>
                <Grid item textAlign={"inherit"}>
                    <Typography component="p" sx={{ fontSize: "1rem" }}>
                        {project.detail}
                    </Typography>
                </Grid>
                
            </Grid>
            <Grid item container textAlign={"inherit"}
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: {xs: "row", md:"row-reverse"},
                    margin: "25px 0px 10px",
                }}
            >
                {project.tech.map((item, index) => (
                    <Grid item display="flex" justifyContent={"center"} alignItems={"center"} sx={{ 
                        padding: "4px", 
                        bgcolor: "#b98a6f", 
                        borderRadius: "5px",  
                        marginY: "9px",
                        marginRight: {xs: "9px", md: "0px"},
                        marginLeft: {xs: "0px", md: "9px"},
                    }}>
                        <Typography component="p" sx={{fontFamily: "monospace", fontSize: "1rem", color: "#ffffff", margin: "auto"}}> {item} </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}



export default function DataBox({...project}:Experience) {
    // console.log(project.image)
    return (
        <Grid item container sx={{
            position: "relative",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: {xs: 10, md: 0},
            padding: "10px",
        }}>

            <Grid item xs md={8} lg={6}
                sx={{
                    height: "inherit",
                    backgroundImage: {xs: `url(${project.image})`, md: "none"},
                    backgroundBlendMode: {xs:"screen", md:"none"},
                    backgroundColor: {xs:"#f7f2f0e3", md:"#f7f2f000"},
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px",
                    paddingY: "55px",
                    zIndex: 2
                }}
            >
                <ProjectContent {...project} />
            </Grid>
            <Grid item xs md={7} 
                sx={{ 
                    display: { xs: "none", md: "flex"},
                    objectFit: "cover", 
                    justifyContent: "center", 
                    flexShrink: 1, 
                    borderRadius: "8px",
                    position: "absolute",
                    left: 1,
                    alignItems: "center",
                    zIndex: 1
                }}
            >
                <StyledImg1 src={project.image} 
                    style={{borderRadius: "8px", opacity: 1 }}
                />
            </Grid>
        </Grid>
    );
}
