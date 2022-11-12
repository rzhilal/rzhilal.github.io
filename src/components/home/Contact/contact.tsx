import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Typography from '@mui/material/Typography';
import theme from '../../../hooks/themes';
import { email } from "../../../constants/data";



const Contact = () => {

  return (
    <ThemeProvider theme={theme }>
        {/* <Container sx={{ marginY: "20rem"}}> */}
          <Grid container id="contact" sx={{ justifyContent: "space-around", marginBottom: "20rem"}} >            
            <Grid item container display={"flex"} flexDirection={"column"} maxWidth="600px" textAlign={"center"} marginBottom={1}>
                <Typography variant={"h6"} component={"h5"}>
                04. What's Next
                </Typography>
                
                <Typography component="h2" sx={{ fontSize: "clamp(40px, 5vw, 60px)", color: "#444444", letterSpacing: 1, fontWeight: 600, margin: "0px 0px 10px"}} >
                Get In Touch
                </Typography>
                <Typography variant="body1" component="p" marginBottom={2} boxSizing={"inherit"}>
                  I’m currently looking for any new opportunities as a web backend developer.
                  Whether you have a question or just want to say hi, I’ll get back to you!
                </Typography>
                <Box sx={{ justifyContent: "center", marginTop: 5, color: "#51bda3",}}>
                  <Button variant="outlined" href={`mailto:${email}`}
                    // onClick={(e) => {
                    //   window.location.href = "mailto:rahulpra@gmail.com";
                    //   e.preventDefault();  sx={{ fontSize: {xs: "13px", sm: "14px", md: "16px", lg: "18px"}, color: "#51bda3", letterSpacing: 1.5, marginBottom: "20px", fontWeight: 500 }}
                    // }}
                    sx={{ 
                      width: "8rem", height: "4rem", color:"inherit", borderColor: "inherit", borderWidth: 2, '&:hover': { borderColor: "inherit", borderWidth: 2, backgroundColor:"ButtonHighlight" }
                    }}
                  >
                    Say Hello
                  </Button>
                </Box>
            </Grid >
          </Grid>
    </ThemeProvider>
  );
};

export default Contact;



// to='#'
//             onClick={(e) => {
//                 window.location.href = mailto;
//                 e.preventDefault();
//             }}