import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Travel } from '../components/Travel'


const Home: NextPage = () => {
  return (
    <Box
      w="full"
      mx="auto"
      maxW="1440"
    >
      <Header />
      <Banner />
      <Travel />
    </Box>
  )
}

export default Home
