import { Box, Flex, Text, Img } from "@chakra-ui/react";

interface CardProps {
    city: string;
    country: string;
    image:string;
    flag: string;
}

export function Card({ city, country, image, flag }: CardProps) {
    return (
        <Box>
            <Img 
                src={image} 
            />
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
                        {city}
                    </Text>
                    <Text
                        fontSize="1rem"
                        color="dark.info"
                        fontWeight="500"
                    >
                        {country}
                    </Text>
                </Box>
                <Flex>
                    <img src={flag} />
                </Flex>
            </Flex>
        </Box>
    )
}