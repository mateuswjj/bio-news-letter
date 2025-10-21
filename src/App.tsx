
import './App.css'
import { Box, createTheme, Divider, ThemeProvider, Typography } from '@mui/material'

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '3.2rem',
  '@media (min-width:600px)': {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};

function App() {

  return (
    <>
      <Header></Header>
      <Divider sx={{ height: "2px", backgroundColor: "white" }}></Divider>
      <Box sx={{
        position: 'relative',
        width: '100%', height: 1000,
        backgroundImage: `url('src/assets/ocean_background.jpg')`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <InfoBox></InfoBox>
      </Box>

    </>
  )
}

export function Header() {
  return (
    <>
      <Box sx={{
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        display: 'flex',
        justifyContent: 'center',
      }} >
        <ThemeProvider theme={theme}>
          <Typography variant="h3">BIO NEWS</Typography>
        </ThemeProvider>
      </Box>
    </>
  );
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
      left: 509,
      zIndex: 1,
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
