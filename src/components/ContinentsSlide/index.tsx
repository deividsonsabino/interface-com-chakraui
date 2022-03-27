import { Text, Flex, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import 'swiper/css';

import { Navigation, Pagination, Mousewheel, Keyboard, Thumbs } from "swiper";
import Link from 'next/link';

interface Continent {
    name: string,
    description: string,
    href: string,
    image: string
}

interface ContinentSlideProps {
    continents: Array<Continent>
}

export function ContinentsSlide({ continents }: ContinentSlideProps) {
    return (
        <Flex
            mt={{ md: "52px" }}
            mb={{ base: "24px", md: "40px" }}
            mx={{ md: "100" }}
            align="center"
            justifyContent="center"
        >

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Thumbs]}
                className="mySwiper"
            >
                {continents.map((continent, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <Flex
                            as="div"
                            height={{ base: "250", md: "450" }}
                            justifyContent="center"
                            textAlign="center"
                            alignItems="center"
                            backgroundSize="cover"
                            backgroundImage={continent.image}
                        >

                            <Link href={continent.href}>
                                <a>
                                    <Text fontSize="3rem" fontWeight="700" color="light.50">{continent.name}</Text>
                                    <Text fontSize="1.5rem" fontWeight="700" color="light.50">{continent.description}</Text>
                                </a>
                            </Link>

                        </Flex>
                    </SwiperSlide>
                ))}

            </Swiper>
        </Flex>
    );
}