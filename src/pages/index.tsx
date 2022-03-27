import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { ContinentsSlide } from '../components/ContinentsSlide'
import { Header } from '../components/Header'
import { Travel } from '../components/Travel'


const Home: NextPage = () => {
  const continents = [
    {
      name:"Europa",
      description:"O continent mais antigo",
      href:"/continent",
      image:"images/europa.png"
    },
    {
      name:"Ásia",
      description:"O continent mais antigo",
      href:"/continent",
      image:"images/asia.jpg"
    },
  ]
  return (
    <Box
      w="full"
      mx="auto"
      maxW="1440"
    >
      <Header />
      <Banner />
      <Travel />
      <ContinentsSlide continents={continents} />
    </Box>
  )
}

export default Home
