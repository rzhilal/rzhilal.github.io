import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import { resumeLink } from '../../constants/data';
import MyIcon1 from '../../images/myIcon1';



const pages = ['About', 'Experience', 'Open', "contact"];


interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger(
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}




function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar sx={{ bgcolor: "#f7f2f0" }}  >
        <Container disableGutters maxWidth="xl" >
          <Toolbar disableGutters>
            <Grid container sx={{ display: 'flex', flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", padding: 1 }}>
              <Grid item container width={"fit-content"} padding={1} >
                <Button variant="outlined" href="/" sx={{ width: "90px", height: "80px", 
                  display: 'flex', justifyContent: "center", mr: 1, color:"#51bda3", borderWidth: 3, borderColor: "#51bda3", '&:hover': { borderWidth: 3, borderColor: "#51bda3", backgroundColor:"ButtonHighlight" }
                }}>
                  <MyIcon1 />
                  
                </Button>
              </Grid>


              <Grid item container width={"fit-content"} sx={{ display: 'flex', flexDirection: "row", flexWrap: "nowrap" }}>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      // onClick={handleCloseNavMenu}
                      href={`/#${page}`}
                      sx={{ my: 2, color: '#9f7171' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
                <Box paddingY={1} sx={{ 
                  display: { xs: 'none', md: 'flex' }, color:"#51bda3" }}
                >
                  <Button variant="outlined" href={resumeLink} sx={{ 
                    display: { xs: 'none', md: 'flex' }, m: 1, color:"#51bda3", borderWidth: 3, borderColor: "#51bda3", '&:hover': { borderWidth: 3, borderColor: "#51bda3", backgroundColor:"ButtonHighlight" }
                  }}>
                    Resume
                  </Button>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "#51bda3" }}>
                  <IconButton
                    size="large"
                    // aria-label="account of current user"
                    // aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon fontSize="large" />
                  </IconButton>
                  
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                      padding: 0,
                      backdropFilter: "blur(5px)",
                      // color: "#9f7171",
                      // backgroundColor: "#f7f2f0"
                    }}
                  >
                    <Box sx={{
                      width: "min(75vw, 400px)", 
                      height: "100vh", 
                      display: "flex", 
                      flexDirection: "column", 
                      justifyContent: " center", 
                      alignItems: "center", 
                      backgroundColor: "#f7f2f0", 
                      position:"fixed", 
                      top: 0, 
                      right: 0,
                      // padding: "50px 10px",
                      boxShadow: "-10px 0px 30px -15px",
                      zIndex: 9,
                      }} >
                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "#51bda3" }}> */}
                        <IconButton 
                          sx={{ 
                            position: "absolute",
                            top: 0,
                            right: 0,
                            color: "#51bda3",
                            width: "fit-content",
                            fontSize: "3rem"
                        }}    
                          size="large"
                          // aria-haspopup="true"
                          onClick={handleCloseNavMenu}
                          color="inherit"
                        >
                          <CloseIcon sx={{fontSize: "3rem"}} />
                        </IconButton>
                        {/* </Box> */}
                      {pages.map((page, index) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ backgroundColor: "#f7f2f0", marginBottom: "20px" }} >
                          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Typography sx={{ color: "#51bda3", fontSize: "19px", fontFamily: "monospace", fontWeight: 600 }}>0{index+1}.</Typography>
                            <Typography variant={"button"} component={"a"} href={`/#${page}`} sx={{ color: "#9f7171", fontSize: "1rem" }} >{page}</Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    
                    {/* <MenuItem key="resumme" onClick={handleCloseNavMenu}> */}
                    <Button variant="outlined" href={resumeLink} sx={{ fontSize: "1rem",
                      display: 'flex', m: "20px", p: "15px 25px", color:"#51bda3", borderWidth: 2, borderColor: "#51bda3", '&:hover': { borderWidth: 2, borderColor: "#51bda3", backgroundColor:"ButtonHighlight" }
                    }}>
                      Resume
                    </Button>
                    </Box>
                    {/* </MenuItem> */}
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
export default ResponsiveAppBar;
