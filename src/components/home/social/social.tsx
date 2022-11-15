
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "styled-components";
import theme from "../../../hooks/themes";
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
                { socialList.map((item) => (
                    <Link href="#" onClick={() => window.open(`${item.link}`, '_blank', 'noopener,noreferrer')}>
                        <Box sx={{ display: "flex", justifyContent: "center", paddingY:"8px", paddingX : { xs: "8px", md : "8px" }, color: "#b98a6f", "&:hover": {paddingTop: "0px", paddingBottom: "16px", color: "#51bda3", cursor: "pointer",}}}>
                            <IconButton color="inherit" sx={{ padding: "0px" }}>
                                <item.icon fontSize="large"/>
                            </IconButton>
                        </Box>
                    </Link>
                ))}
            </Box>
        </ThemeProvider>
    )
}

export default MySocial
  