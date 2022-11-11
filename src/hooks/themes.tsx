
import { createTheme, responsiveFontSizes } from '@mui/material';



let theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "h1",
                    },
                    style: {
                        color: "#444444",
                        fontWeight: "bolder",
                        fontSize: "3rem",
                    }
                },
                {
                    props: {
                        variant: "h2",
                    },
                    style: {
                        color: "#9f7171",
                        fontWeight: "bold",
                        fontSize: "3rem"
                    }
                },
                {
                    props: {
                        variant: "h3",
                    },
                    style: {
                        color: "#9f7171",
                        // fontWeight: "500",
                        fontSize: "clamp(26px,5vw,32px)",
                        fontFamily: "roboto",
                    }
                },
                {
                    props: {
                        variant: "h4",
                    },
                    style: {
                        color: "#51bda3",
                        fontFamily: "monospace",
                        // fontWeight: "bold",
                        // fontSize: "1rem"
                    }
                },
                {
                    props: {
                        variant: "h5",
                    },
                    style: {
                        color: "#9f7171",
                        fontWeight: "500",
                        fontSize: "clamp(25px, 3vw, 35px)",
                        '&:hover': {
                            color: "#51bda3",
                        }
                    }
                },
                {
                    props: {
                        variant: "h6",
                    },
                    style: {
                        color: "#51bda3",
                        fontFamily: "monospace",
                        // fontSize: "2rem"
                        // fontSize: "clamp(35px, 5vw, 55px)",
                    }
                },
                {
                    props: {
                        variant: "body1",
                    },
                    style: {
                        color: "#b98a6f",
                        fontSize: "1.02rem",
                        letterSpacing: "0.015em",
                    }
                },
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        color: "#340303",
                        fontSize: "1rem",
                        letterSpacing: "0.018em",
                    }
                },
                
            ]
        },
        
    },
    
})

export const iconTheme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#64ffda",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#ccd6f6",
      },
    },
  });


theme = responsiveFontSizes(theme);

export default theme