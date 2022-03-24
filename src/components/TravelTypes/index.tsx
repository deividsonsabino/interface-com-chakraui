import { Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa'

interface TravelTypesProps {
    name: string;
    image: string;
}

export function TravelTypes({ name, image }: TravelTypesProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            display="flex"
            flexDir={{lg:"column"}}
            alignItems="center"
            mt="1.5rem" >
            {isWideVersion && (
                <img src={image} />
            )}

            {!isWideVersion && (<Icon as={FaCircle} color='highlight.900' m="0.5rem" />)}
            <Text fontSize={{ base: "1.125rem", md: "1.5rem" }} textAlign="center" fontWeight={{ base: "500", md: "600" }} color="dark.900">{name}</Text>
        </Flex>
    )
}