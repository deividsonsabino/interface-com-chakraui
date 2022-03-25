import { Box, Flex, Text } from "@chakra-ui/react";

export function Card() {
    return (
        <Box>
            <img src="images/londres.png" />
            <Flex
                justifyContent="space-between"
                p="1rem"
                alignItems="center"
                borderBottom="1px"
                borderLeft="1px"
                borderRight="1px"
                borderBottomColor="highlight.900"
                borderLeftColor="highlight.900"
                borderRightColor="highlight.900"
            >
                <Box>
                    <Text
                        fontSize="1.25rem"
                        color="dark.900"
                        fontWeight="600"
                    >
                        Londres
                    </Text>
                    <Text
                        fontSize="1rem"
                        color="dark.info"
                        fontWeight="500"
                    >
                        Reino Unido
                    </Text>
                </Box>
                <Flex>
                    <img src="images/logo-reino-unido.png" />
                </Flex>
            </Flex>
        </Box>
    )
}