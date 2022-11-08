import { Container, Grid, ThemeProvider, Typography } from '@mui/material';
// import styled from 'styled-components';
import theme from '../../../hooks/themes';
import MyHeading from '../myHeading';
import DataBox from './experienceProject';
import { experienceList } from './data';



function Experience() {
    console.log(experienceList)
    return (
        <Container id="Experience" disableGutters sx={{ marginY: "20rem"}} >
            <ThemeProvider theme={theme}>
                <MyHeading index="02." myHeading="Experience" />
                {experienceList.map((item) => (
                    <Grid container sx={{ display: "flex", flexDirection: "column", flexGrow: 1 , marginY: 1, paddingY:"25px" }}>
                        <Typography variant='h4' component={"h3"} marginBottom={5}> {item.name} </Typography>
                        {item.projects.map((project) => 
                        // <>
                        <DataBox {...project} />
                        // </>
                        )}
                    </Grid>
                ))}
            </ThemeProvider>
        </Container>
    );
  }
  
  export default Experience; 