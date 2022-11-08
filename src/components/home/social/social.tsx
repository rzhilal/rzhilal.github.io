
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "styled-components";
import theme from "../../../hooks/themes";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { socialList } from "./data";

// type MySocialProps = {
//     // index: string;
//     id: number;
//     icon: React.ReactComponent;
//     link: string;
    
//     // location: any;: MySocialProps[]
// }

    
// const MyIcon = (social: MySocialProps) => {
//     return (
//         <Link href="#" onClick={() => window.open(`${social.link}`, '_blank', 'noopener,noreferrer')}>
//             <Box sx={{ display: "flex", justifyContent: "center",height: "60px", alignItems: "center", color: "#b98a6f", "&:hover": {alignItems: "flex-start", color: "#51bda3", cursor: "pointer",}}}>
//                 <IconButton color="inherit">
//                     {social.icon}
//                     <GitHubIcon fontSize="large"/>
//                 </IconButton>
//             </Box>
//         </Link>
//     )
// }
  
const MySocial = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                display: 'flex',
                flexDirection: {xs: "row", md: "column-reverse"},
                }}
            >
                <Box sx={{ display: { xs: "none", md: "flex" } , flexGrow: {xs: 'none', md: 1}, height: "6rem", marginTop: "2rem" }} justifyContent="center">
                    <Divider color="#a8b2d1" orientation="vertical" sx={{ mx: 1 }}/>
                </Box>
                <Link href="#" onClick={() => window.open(`${socialList.git}`, '_blank', 'noopener,noreferrer')}>
                    <Box sx={{ display: "flex", justifyContent: "center",height: "60px", alignItems: "center", color: "#b98a6f", "&:hover": {alignItems: "flex-start", color: "#51bda3", cursor: "pointer",}}}>
                        <IconButton color="inherit">
                            {/* {socialList.icon} */}
                            <GitHubIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Link>
                <Link href="#" onClick={() => window.open(`${socialList.linkedIn}`, '_blank', 'noopener,noreferrer')}>
                    <Box sx={{ display: "flex", justifyContent: "center",height: "60px", alignItems: "center", color: "#b98a6f", "&:hover": {alignItems: "flex-start", color: "#51bda3", cursor: "pointer",}}}>
                        <IconButton color="inherit">
                            {/* {socialList.icon} */}
                            <LinkedInIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Link>
                <Link href="#" onClick={() => window.open(`${socialList.twitter}`, '_blank', 'noopener,noreferrer')}>
                    <Box sx={{ display: "flex", justifyContent: "center",height: "60px", alignItems: "center", color: "#b98a6f", "&:hover": {alignItems: "flex-start", color: "#51bda3", cursor: "pointer",}}}>
                        <IconButton color="inherit">
                            {/* {socialList.icon} */}
                            <TwitterIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Link>
                <Link href="#" onClick={() => window.open(`${socialList.instagram}`, '_blank', 'noopener,noreferrer')}>
                    <Box sx={{ display: "flex", justifyContent: "center",height: "60px", alignItems: "center", color: "#b98a6f", "&:hover": {alignItems: "flex-start", color: "#51bda3", cursor: "pointer",}}}>
                        <IconButton color="inherit">
                            {/* {socialList.icon} */}
                            <InstagramIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Link>
                {/* <MyIcon /> */}
            </Box>
        </ThemeProvider>
    )
}

export default MySocial
  