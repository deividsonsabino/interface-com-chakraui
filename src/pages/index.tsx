import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'


const Home: NextPage = () => {
  return (
    <Box
      w="full"
      mx="auto"
      maxW="1440"
    >
      <Header />
      <Banner />
    </Box>
  )
}

export default Home
