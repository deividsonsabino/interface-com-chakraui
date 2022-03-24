import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        md:false,
        lg: true
    })

    return (

        <Flex
            flexDirection={{ sm: "column", lg: "row" }}
            as="div"
            width="full"
            justifyContent="space-between"
            mx="auto"
            px={{base:"1rem", md:"8.75rem", lg:"8.75rem"}}
            py={{ base: "1rem", md: "2.5rem", lg: "5rem" }}
            align="center"
            color="light.50"
            style={{ background: `url(images/background.png)` }}
        >
            <Box
                as="div"
            >
                <Text fontWeight="500" fontSize={{base:"1.25rem",lg:"2.25rem"}}>5 Continentes,</Text>
                <Text fontWeight="500" fontSize={{base:"1.25rem",lg:"2.25rem"}}>infinitas possibilidades</Text>
                <Text fontWeight="400" fontSize={{base:"0.875rem",lg:"1.25rem"}}>Chegou a hora de tirar do papel a viagem que você</Text>
                <Text fontWeight="400" fontSize={{base:"0.875rem",lg:"1.25rem"}}> sempre sonhou.</Text>
            </Box>
            {isWideVersion && (
                <Box
                    as="div"
                    mt="4.75rem"
                    mr={{lg:"17.5rem"}}
                    position="absolute"
                    right={0}
                >
                    <img src="images/airplane.png" />
                </Box>
            )}
        </Flex>
    )
}