import { Flex, Box, Text } from '@chakra-ui/react'
import { Card } from '../components/Card'
import { Header } from '../components/Header'

export default function Continent() {
    return (
        <>
            <Header />
            <Flex
                flexDirection={{ sm: "column", lg: "row" }}
                as="div"
                width="full"
                height={{ base: "15.625rem", md: "31.25rem" }}
                justifyContent={{ base: "center", md: "center", lg: "space-between" }}
                alignItems={{ base: "center", lg: "flex-end" }}
                mx="auto"
                px={{ base: "1rem", md: "8.75rem" }}
                py={{ base: "1.75rem", md: "1.75rem", lg: "0" }}
                align={{ md: "center" }}
                color="light.50"
                style={{ background: `url(images/europa-banner.png)` }}
            >
                <Box
                    as="div"

                >
                    <Text
                        fontWeight="500"
                        fontSize={{ base: "1.25rem", md: "2.25rem" }}
                        mb={{lg:"3.688rem"}}
                    >
                        Europa
                    </Text>
                </Box>
            </Flex>
            <Flex
                flexDirection="column"
                px={{ base: "1rem", md: "8.75rem" }}
                my={{ base: "1.5rem", md: "5rem" }}
            >
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={{ base: "column", md: "row" }}
                >
                    <Flex
                        w="full"
                    >
                        <Text
                            fontSize={{ base: "0.875rem", md: "1.5rem" }}
                            fontWeight="400"
                        >
                            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                        </Text>
                    </Flex>
                    <Flex
                        mt={{ base: "1rem", md: "0" }}
                        w="full"
                        justifyContent="space-evenly"
                    >
                        <Box
                            textAlign="center"
                        >
                            <Text
                                fontWeight="400"
                                fontSize={{ base: "1.5rem", md: "3rem" }}
                                color="highlight.900"
                            >50</Text>
                            <Text
                                fontSize={{ base: "1.125rem", md: "1.5rem" }}
                                fontWeight={{ base: "400", md: "600" }}
                                color="dark.900"
                            >países</Text>
                        </Box>
                        <Box
                            textAlign="center"
                        >
                            <Text
                                fontWeight="400"
                                fontSize={{ base: "1.5rem", md: "3rem" }}
                                color="highlight.900"
                            >50</Text>
                            <Text
                                fontSize={{ base: "1.125rem", md: "1.5rem" }}
                                fontWeight={{ base: "400", md: "600" }}
                                color="dark.900"
                            >línguas</Text>
                        </Box>
                        <Box
                            textAlign="center"
                        >
                            <Text
                                fontWeight="400"
                                fontSize={{ base: "1.5rem", md: "3rem" }}
                                color="highlight.900"
                            >50</Text>
                            <Text
                                fontSize={{ base: "1.125rem", md: "1.5rem" }}
                                fontWeight={{ base: "400", md: "600" }}
                                color="dark.900"
                            >cidades +100</Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex
                    flexDirection="column"
                >
                    <Text
                        mt={{base:"1.5rem",md:"5rem"}}
                        fontSize={{base:"1.5rem", md:"2.25rem"}}
                        color="dark.900"
                        fontWeight="500"
                    >Cidades + 100</Text>
                    <Flex
                        alignItems="center"
                        flexDirection={{ base: "column", md: "row" }}
                        mt="2.5rem"
                        mb="2.188rem"
                        gap="2.813rem "
                    >
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Flex>
                </Flex>
            </Flex>

        </>
    )
}