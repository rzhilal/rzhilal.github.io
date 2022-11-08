import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { About, OpenSource, Experience, Hero, Contact, Layout} from '../components';



function Content() {
    return (
        <Container sx={{display: "flex", justifyContent: "center"}}>
          <Box sx={{maxWidth: "900px"}} >
            <Hero />
            <About  />
            <Experience  /> 
            <OpenSource   />
            <Contact  />
          </Box>
        </Container>
    );
  }



function IndexPage() {
    return (
        <Layout>
        <Content />
        </Layout>
    );
  }
  
  export default IndexPage;

  // id="Experience" id="Open" id="contact" id="About"