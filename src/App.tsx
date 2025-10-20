
import './App.css'
import { Box } from '@mui/material'

function App() {

  return (
    <>
      <InfoBox></InfoBox>
    </>
  )
}

export function InfoBox() {

  return (
    <>
      <Box sx={{ position: 'relative', width: 617, height: 627 }}>
        <Tentacle1></Tentacle1>
        <Tentacle2></Tentacle2>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: '#000000',
          }}
        />
      </Box>
    </>
  )

}

export function Tentacle1() {
  return <img src={'src/assets/tent_2.svg'} alt="Logo"
    style={{
      position: 'absolute',
      top: 345,
      left: 510,
      zIndex: 1,
      rotate: '90deg',
    }} />;
}

export function Tentacle2() {
  return <img src={'src/assets/tent_1.svg'} alt="Logo"
    style={{
      position: 'absolute',
      top: 230,
      left: -52,
      zIndex: 1,
    }} />;
}

export default App
