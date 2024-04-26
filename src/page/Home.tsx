import { Box } from '@mui/material'
import CrCard from '../components/CrCard'
import CrNavbar from '../components/CrNavbar'
import { Container, Grid } from '@mui/material'
import useApi from './hook/useApi'
import { Products } from '../types/Products'
const Home = () => {

  

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products?sort=desc')
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  // }, []) 


  const { data, loading, error} = useApi()

  return (

    <>
      <CrNavbar />
      <Container maxWidth='lg' >
        <Box sx={

          {
            display: 'flex',
            gap: 2,
            marginTop: 5
          }}
        >
          {loading ? (<p>Loading...</p>)
            :
            <Grid container spacing={2}>
              {data.map((item:Products) => (
                <Grid item key={item.id} xs={12} sm={4} md={2} lg={4} xl={4} >
                  <CrCard items={item} />
                </Grid>
              ))}
            </Grid>
          }



        </Box>
      </Container>

    </>
  )

}

export default Home
