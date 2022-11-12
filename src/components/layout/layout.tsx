
import { ThemeProvider } from 'styled-components';
// import { Head, Loader, Nav, Social, Email, Footer } from '.components';
// import { GlobalStyle, theme } from '@styles';
import { Nav } from '..';
import { Box } from '@mui/system';
import MySocial from '../home/social/social';
import Grid from '@mui/material/Grid';
import theme from '../../hooks/themes';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { email } from "../../constants/data";

type LayoutProps = {
    children: JSX.Element[] | JSX.Element;
    // location: any;
  }




const Layout = ({ children } : LayoutProps) => {

  return (
    <ThemeProvider theme={theme}>
    <Grid container sx={{ display:"flex", flexDirection: "column", bgcolor: "#f7f2f0" }}>
        <Grid item container bgcolor={"blueviolet"}>
          <Nav />
        </Grid>
        <Grid item container sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }}}>          
          <Grid item container sx={{ width: {xs: "100%", md: "85px", lg:"125px"}}} justifyContent={"center"}>
            <Grid item sx={{ position: {xs: "relative", md: "fixed", bottom: 0} }}>
              <MySocial />
            </Grid>
          </Grid>
          <Grid item container xs={12} md >
            <Container>
            {children}
            </Container>
          </Grid>
          <Grid item container sx={{ width: {xs: "100%", md: "85px", lg:"125px"}, display: { xs: "none", md: "inherit"}}} justifyContent={"center"}>
            <Grid item sx={{ position: {xs: "relative", md: "fixed", bottom: 0} }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: 'fit-content',
                flexDirection: {xs: "row", md: "column-reverse"},
                }}
            >
                <Box sx={{ display: { xs: "none", md: "flex" } , flexGrow: {xs: 'none', md: 1}, height: "6rem", marginTop: "2rem" }} justifyContent="center">
                    <Divider color="#a8b2d1" orientation="vertical" sx={{ mx: 1 }}/>
                </Box>
                <Box >
                    <Typography sx={{textOrientation: 'sideways', writingMode: 'vertical-lr'}} letterSpacing={1}>
                      <Link href={`mailto:${email}`} sx={{color: "#b98a6f", '&:hover': {cursor: "pointer", color: "#51bda3", marginBottom: 2}}} underline={"none"} >
                        {email}
                      </Link>
                    </Typography>
                </Box>
            </Box>
            </Grid>
          </Grid>
          {/* <Grid item container sx={{  width: {xs: "100%", md: "85px", lg:"125px"}, display: { xs: "none", md: "inherit"}}} justifyContent={"center"}>
            <Grid item sx={{  position: {md: "fixed"}, right: "0", bottom: 0}}>
              <MySocial MySocial='asdf' />
              
            </Grid>
          </Grid> */}
        </Grid>
      
    </Grid>
    </ThemeProvider>
  
  );
};


export default Layout;