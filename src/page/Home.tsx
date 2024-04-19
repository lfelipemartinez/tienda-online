import { Box } from '@mui/material'
import CrCard from '../components/CrCard'
import CrNavbar from '../components/CrNavbar'

const Home = () => {
  return (

    <>
      <CrNavbar />
      <Box sx={

        {
          display: 'flex',
          gap: 2,
          marginTop: 5
        }
      }>
        <CrCard />
        <CrCard />

      </Box>
    </>
  )

}

export default Home
