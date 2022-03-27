import { Flex, Box, Text } from '@chakra-ui/react'
import { Card } from '../components/Card'
import { Header } from '../components/Header'

export default function Continent() {
    const continent = {
        name: "Europa",
        banner: "images/europa-banner.png",
        description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        cities: [
            {
                name: "Londres",
                country: "Reino Unido",
                image: "images/londres.png",
                flag: "images/logo-reino-unido.png",
            },
            {
                name: "Paris",
                country: "Paris",
                image: "images/paris.png",
                flag: "images/logo-franca.png",
            },
            {
                name: "Roma",
                country: "Itália",
                image: "images/roma.png",
                flag: "images/logo-italia.png",
            },
            {
                name: "Praga",
                country: "República Tcheca",
                image: "images/praga.png",
                flag: "images/logo-republica-tcheca.png",
            },
            {
                name: "Amsterdã",
                country: "Holanda",
                image: "images/amsterda.png",
                flag: "images/logo-holanda.png",
            },
        ],
        totalCountries: "50",
        totalLanguages: "60",
        topCities: "27"
    }

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
                backgroundImage={continent.banner}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
            >
                <Box
                    as="div"
                >
                    <Text
                        fontWeight="500"
                        fontSize={{ base: "1.25rem", md: "2.25rem" }}
                        mb={{ lg: "3.688rem" }}
                    >
                        {continent.name}
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
                            {continent.description}
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
                            >{continent.totalCountries}</Text>
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
                            >{continent.totalLanguages}</Text>
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
                            >{continent.topCities}</Text>
                            <Text
                                fontSize={{ base: "1.125rem", md: "1.5rem" }}
                                fontWeight={{ base: "400", md: "600" }}
                                color="dark.900"
                            >cidades +100</Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex
                    w="full"
                    alignItems={{base:"center",md:"flex-start"}}
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Text
                        mt={{ base: "1.5rem", md: "5rem" }}
                        fontSize={{ base: "1.5rem", md: "2.25rem" }}
                        color="dark.900"
                        fontWeight="500"
                    >Cidades + 100</Text>
                    <Flex
                        wrap="wrap"
                        alignItems="center"
                        flexDirection={{ base: "column", md: "row" }}
                        mt="2.5rem"
                        mb="2.188rem"
                        gap="2.813rem "
                    >
                        {continent.cities.map(city => (
                            <Card
                                city={city.name}
                                country={city.country}
                                image={city.image}
                                flag={city.flag}
                            />
                        ))}
                    </Flex>
                </Flex>
            </Flex>

        </>
    )
}