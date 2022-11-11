
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
                    <Box sx={{ display: "flex", justifyContent: "center", paddingY:"8px", paddingX : { xs: "8px", md : "8px" }, color: "#b98a6f", "&:hover": {paddingTop: "0px", paddingBottom: "16px", color: "#51bda3", cursor: "pointer",}}}>
                        <IconButton color="inherit" sx={{ padding: "0px" }}>
                            {/* {socialList.icon} */}
                            <GitHubIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Link>
                <Link href="#" onClick={() => window.open(`${socialList.linkedIn}`, '_blank', 'noopener,noreferrer')}>
                    <Box sx={{ display: "flex", justifyContent: "center", paddingY:"8px", paddingX : { xs: "8px", md : "8px" }, color: "#b98a6f", "&:hover": {paddingTop: "0px", paddingBottom: "16px", color: "#51bda3", cursor: "pointer",}}}>
                        <IconButton color="inherit" sx={{ padding: "0px" }}>
                            {/* {socialList.icon} */}
                            <LinkedInIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Link>
                <Link href="#" onClick={() => window.open(`${socialList.twitter}`, '_blank', 'noopener,noreferrer')}>
                    <Box sx={{ display: "flex", justifyContent: "center", paddingY:"8px", paddingX : { xs: "8px", md : "8px" }, color: "#b98a6f", "&:hover": {paddingTop: "0px", paddingBottom: "16px", color: "#51bda3", cursor: "pointer",}}}>
                        <IconButton color="inherit" sx={{ padding: "0px" }}>
                            {/* {socialList.icon} */}
                            <TwitterIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Link>
                <Link href="#" onClick={() => window.open(`${socialList.instagram}`, '_blank', 'noopener,noreferrer')}>
                    <Box sx={{ display: "flex", justifyContent: "center", paddingY:"8px", paddingX : { xs: "8px", md : "8px" }, color: "#b98a6f", "&:hover": {paddingTop: "0px", paddingBottom: "16px", color: "#51bda3", cursor: "pointer",}}}>
                        <IconButton color="inherit" sx={{ padding: "0px" }}>
                            {/* {socialList.icon} */}
                            <InstagramIcon fontSize="large"/>
                        </IconButton>
                    </Box>
                </Link>
            </Box>
        </ThemeProvider>
    )
}

export default MySocial
  