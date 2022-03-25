import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        md:false,
        lg:true
    })

    return (

        <Flex
            flexDirection={{ sm: "column", lg: "row" }}
            as="div"
            width="full"
            justifyContent={{base:"center",md:"center", lg:"space-between"}}
            mx="auto"
            px={{base:"1rem", md:"8.75rem"}}
            py={{base:"1.75rem", md:"1.75rem", lg:"0"}}
            align={{md:"center"}}
            color="light.50"
            style={{ background: `url(images/background.png)` }}
        >
            <Box
                as="div"
            >
                <Text fontWeight="500" fontSize={{base:"1.25rem",md:"2.25rem"}}>5 Continentes,</Text>
                <Text fontWeight="500" fontSize={{base:"1.25rem",md:"2.25rem"}}>infinitas possibilidades</Text>
                <Text fontWeight="400" fontSize={{base:"0.875rem",md:"1.25rem"}}>Chegou a hora de tirar do papel a viagem que você</Text>
                <Text fontWeight="400" fontSize={{base:"0.875rem",md:"1.25rem"}}> sempre sonhou.</Text>
            </Box>
            {isWideVersion && (
                <Box
                    as="div"
                >
                    <img src="images/airplane.png" />
                </Box>
            )}
        </Flex>
    )
}