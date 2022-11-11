import { Grid,  ThemeProvider, Typography } from "@mui/material"; 
import styled from "styled-components";
import { Experience } from "./data";
import theme from "../../../hooks/themes";



const StyledImg1 = styled.img`
    width: 100%;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(0.5);
    &:hover,
    &:focus {
        filter: none;
        mix-blend-mode: normal;
      };
`;

    // opacity: 1;


function ProjectContent({...project}:Experience) {
    return (
        <ThemeProvider theme={theme}>
        <Grid container sx={{
            display:"flex",
            flexDirection: "column",
            justifyContent: {xs: "flex-start", md: "flex-end"},
            textAlign: {xs: "left", md: "right"},
            padding: {xs: "40px", md: "none"},
            
            }}
        >
            <Typography component="p" sx={{fontFamily: "monospace", fontSize: "1.1rem", color: "#51bda3", marginY: "10px"}}> Featured Project </Typography>
            
            <Grid item container sx={{flexDirection: {xs: "row", md: "row-reverse"}}}>
                <Typography variant="h5" component="h4" sx={{ marginBottom: "20px", maxWidth: { xs: "100%", md: "60%" }}}> 
                    {project.name} 
                </Typography>
            </Grid>
            <Grid item sx={{
                backgroundColor: {xs: "none", md: "#e1d3cd"},
                padding: {xs: "none", md: "20px"},
                boxShadow: {xs: "none", md: "0 10px 30px -15px rgb(2 12 28 / 16%)"},
                borderRadius: "5px",
            }}
            >
                <Typography variant="body2" component="p" sx={{ fontSize: "1rem" }}>
                    {project.detail}
                </Typography>
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
                    backgroundColor: {xs:"#f7f2f0", md:"#f7f2f000"},
                    // backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: {xs: "none", md:"8px"},
                    paddingY: "55px",
                    zIndex: 2,
                    boxShadow: {xs: "0 10px 30px -15px rgb(2 12 28 / 16%)", md: "none"},

                }}
            >
                <ProjectContent {...project} />
            </Grid>
            <Grid item xs md={7} 
                sx={{ 
                    display: { xs: "none", md: "flex"},
                    objectFit: "cover", 
                    bgcolor: "#f7f2f0",
                    justifyContent: "center", 
                    flexShrink: 1, 
                    borderRadius: "8px",
                    position: "absolute",
                    left: 1,
                    // bottom: 1,
                    alignItems: "center",
                    zIndex: 1
                }}
            >
                <StyledImg1 src={project.image} 
                    style={{borderRadius: "8px" }}
                />
            </Grid>
        </Grid>
    );
}
