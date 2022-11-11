import { Button, Grid, ThemeProvider, Typography } from "@mui/material";

import { iconTheme } from "../../../hooks/themes";

import GitHubIcon from '@mui/icons-material/GitHub';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

type ProjectBoxProps = {
    key: number;
    name: string;
    detail: string;
    tech: string[];
    link?: string ;
}
// type url:string


export default function ProjectBox({...project}:ProjectBoxProps) {
    const openInNewTab = (url:string|undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    // const linkIt = project.link? : "#contained-buttons"
    return (
        // <ThemeProvider theme={theme}>, width: "50px", height: "50px",
        
        <Grid container 
         sx={{
            padding: 3,
            border: "solid 1px #00000021",
            bgcolor: "#ffffff42",
            borderRadius: "9px",
            height: "100%",
            "&:hover": {
                cursor: "pointer",
            },
        }}
        onClick={() => openInNewTab(project.link)}
        >
            <Grid container sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
                <Grid item container>
                    <Grid item container justifyContent={"space-between"} marginBottom={"20px"}>
                        <ThemeProvider theme={iconTheme}>
                            <FolderOutlinedIcon sx={{ color: "#51bda3", fontSize: "3rem" }}/>
                            <Button sx={{color: "#51bda3", padding: "8px", alignItems: "flex-end"}} onClick={() => openInNewTab(project.link)}>
                                <GitHubIcon sx={{ color: "#7c5843", "&:hover": { color: "#51bda3" } }}/>
                            </Button>
                        </ThemeProvider>
                    </Grid>
                
                    <Grid item alignItems={"flex-end"} marginBottom={4}>
                        <Typography variant="h5" component="h3"> {project.name} </Typography>
                    </Grid>
                    <Grid item textAlign={"inherit"}>
                        <Typography variant="body2" component="p" >
                            {project.detail}
                            {/* detail shjdf asdfhyugfehf fasifdejfbk sfadufadsfkasf  */}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container textAlign={"inherit"}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        margin: "25px 0px 10px",
                    }}
                >
                    {project.tech.map((item, index) => (
                        <Typography key={index} sx={{fontFamily: "monospace", fontSize: "1rem", color: "#b98a6f", margin: "0px 20px 5px 0px"}}> {item} </Typography>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}


