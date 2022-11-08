
import IndexPage from './pages';
import { ThemeProvider } from 'styled-components';
import theme from './hooks/themes';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <IndexPage />
    </ThemeProvider>
  );
}

export default App;
