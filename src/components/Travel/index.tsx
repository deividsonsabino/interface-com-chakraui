import { Flex, Text, Box } from "@chakra-ui/react";
import { TravelTypes } from "../TravelTypes";
import { AiOutlineMinus } from 'react-icons/ai'

export function Travel() {
    return (
        <>
            <Flex
                flexWrap="wrap"
                justifyContent={{ base: "center", md: "space-between" }}
                mt={{ base: "2.25", md: "7.125rem" }}
                mx={{ base: "1rem", md: "8.75rem", lg: "8.75rem" }}
            >
                <TravelTypes image="./images/cocktail.png" name="vida noturna" />
                <TravelTypes image="./images/surf.png" name="praia" />
                <TravelTypes image="./images/building.png" name="moderno" />
                <TravelTypes image="./images/museum.png" name="clássico" />
                <TravelTypes image="./images/earth.png" name="e mais..." />
            </Flex>
            <Box my={{base:"2.25rem", md:"3.25rem"}} h={{base:"0.9",lg:"1"}} w={90} mx="auto" background="dark.900" >
 
            </Box>
            <Flex
                justifyContent="center"
                flexDirection="column"
            >

                <Box>
                    <Text color="dark.900" textAlign="center" fontWeight={500} fontSize={{base:"1.25rem",lg:"2.25rem"}}>Vamos nessa?</Text>
                    <Text color="dark.900" textAlign="center" fontWeight={500} fontSize={{base:"1.25rem",lg:"2.25rem"}}>Então escolha seu continente</Text>
                </Box>
            </Flex>
        </>

    )
}