import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Typography from '@mui/material/Typography';
import theme from '../../../hooks/themes';

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container id="contact" sx={{ justifyContent: "space-around", marginBottom: "20rem" }}>
        <Grid item container display={"flex"} flexDirection={"column"} maxWidth="600px" textAlign={"center"} marginBottom={1}>
          <Typography variant={"h6"} component={"h5"}>
            04. What's Next
          </Typography>

          <Typography component="h2" sx={{ fontSize: "clamp(40px, 5vw, 60px)", color: "#444444", letterSpacing: 1, fontWeight: 600, margin: "0px 0px 10px" }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" component="p" marginBottom={2} boxSizing={"inherit"}>
            I’m currently looking for any new opportunities as a web backend developer.
            Whether you have a question or just want to say hi, I’ll get back to you!
          </Typography>
          <Box sx={{ justifyContent: "center", marginTop: 5, color: "#51bda3" }}>
            <Button variant="outlined" href="mailto:rzqhilal@gmail.com"
              sx={{ 
                width: "8rem", height: "4rem", color:"inherit", borderColor: "inherit", borderWidth: 2, '&:hover': { borderColor: "inherit", borderWidth: 2, backgroundColor:"ButtonHighlight" }
              }}
            >
              Say Hello
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Contact;
