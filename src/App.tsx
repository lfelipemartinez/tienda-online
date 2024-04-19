
import { ThemeProvider} from '@mui/material'
import Home from './page/Home';
import { Themes } from './styles/Themes';

const App = () => {


  return (
    <ThemeProvider theme={Themes}>
     <Home />
    </ThemeProvider>
  )
}

export default App

