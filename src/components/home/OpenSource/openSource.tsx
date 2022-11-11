import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../../../hooks/themes';
import MyHeading from '../myHeading';
import ProjectBox from './openSourceProject';
import { projectList } from './data';

function Projects() {
    return (
        <Container id="Open" disableGutters sx={{ marginY: "10rem"}} >
            <ThemeProvider theme={theme}>
                <MyHeading index="03." myHeading="Open Source" />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {projectList.map((project, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index} sx={{ '&:hover': { paddingTop:"8px", paddingBottom:"8px" }}}>
                            <ProjectBox {...project}/>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
            </ThemeProvider>
        </Container>
    );
  }
  
  export default Projects;