import { Typography } from '@mui/material'
import './App.css'
import MyBody from './components/MyBody'
import MyContainer from './components/MyContainer'
import MyMenu from './components/MyMenu'

function App() {
  return (
    <MyBody>
      <MyMenu />
      <MyContainer>
        <Typography>Hello world</Typography>
      </MyContainer>
    </MyBody>
  )
}

export default App
