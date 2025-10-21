
import './App.css'
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'

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

const icons = [
  "src/assets/icon_1.svg",
  "src/assets/icon_2.svg",

];

function App() {

  return (
    <>
      <Header></Header>
      <AnimationBox></AnimationBox>

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
        marginTop: 12
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
        paddingTop: 6,
        paddingBottom: 6,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#032C36'
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
            backgroundColor: '#A9C1C1',
            color: 'black'
          }}
        >
          <p>Oie</p>
        </Box>
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

export function AnimationBox() {
  return (
    <>
      <Box sx={{
        width: '100%',
        height: 24,
        backgroundColor: '#032C36',
        color: 'black',
        display: "flex",
        justifyContent: "center",
      }}>
        <Box sx={{
          width: '90%',
          height: 48,
          backgroundColor: 'rgb(6 55 67)',
          color: 'black'
        }}>
      {icons.map((src, i) => (
              <img
                key={i}
                src={src}
                className="icons"
              />
            ))}
        </Box>
      </Box>
    </>
  )
}

export default App
