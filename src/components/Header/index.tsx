import { Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {
    const router = useRouter();

    return (
        <Flex
            as="header"
            maxWidth={1480}
            my="1.688rem"
            align="center"
        >
            {
                router.asPath !== '/' && (
                    <Link
                        ml="8.75rem"
                    > voltar </Link>
                )
            }

            <Flex
                w="100%"
                align="center"
                justifyContent="center"
            >
                <img src="images/logo.png" />
            </Flex>
        </Flex>
    )
}