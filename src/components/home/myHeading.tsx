import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type MyHeadingProps = {
    index: string;
    myHeading: string;
  }
  
const MyHeading = ({ index, myHeading } : MyHeadingProps) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            margin: "1rem 0rem 4rem",
            width: "100%",
        }}>
            <Box display='flex' flexDirection="row" justifyContent="center" alignItems="flex-end">
                <Typography variant="h4" component="h3">{index}</Typography>
                <Typography variant="h3" component="h2" marginX={2} >{myHeading}</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} justifyContent="center" alignItems="stretch" m = {1} >
                <Divider color="#a8b2d1" />
            </Box>
            <Box sx={{ flexGrow: {xs: 'none', md: 1} }} >
            
            </Box>
        </Box>
    )
}

export default MyHeading
  