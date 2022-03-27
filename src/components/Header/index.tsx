import { Flex } from "@chakra-ui/react";
import Link from 'next/link'
import { useRouter } from "next/router";
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function Header() {
    const router = useRouter();

    return (
        <Flex
            as="header"
            my="1.688rem"
            align="center"
        >
            {
                router.asPath !== '/' && (
                    <Link href="/">
                        <a>
                            <ChevronLeftIcon
                                _hover={{ cursorTo: "pointer" }}
                                ml="8.75rem"
                            />
                        </a>
                    </Link>
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