
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
                        fontWeight: "500",
                        // fontSize: "0.8rem"
                        fontFamily: "calibre",
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
                        fontSize: "clamp(15px, 5vw, 25px)",
                        '&:hover': {
                            color: "#51bda3",
                        }
                    }
                },
                {
                    props: {
                        variant: "body1",
                    },
                    style: {
                        color: "#340303",
                        fontSize: "1.1rem",
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