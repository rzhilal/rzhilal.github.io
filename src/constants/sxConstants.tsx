export const linkSx = {
    display: "inline-block",
    position: "relative",
    color: "#51bda3",
    underline: "none",
          
    '&::after': {
        content: "''",
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2px",
        bottom: "0",
        left: "0",
        backgroundColor: "#51bda3",
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
        cursor: "pointer",
    },
        
    '&:hover:after': {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
    }
}


