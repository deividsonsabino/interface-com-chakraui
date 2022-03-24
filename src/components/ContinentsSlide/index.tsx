import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import 'swiper/css';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


import { Flex ,Img} from '@chakra-ui/react';

export function ContinentsSlide() {
    return (
        <Flex
            mt={{ md: "52px" }}
            mb={{ base: "24px", md: "40px" }}
            mx={{ md: "100" }}
            align="center"
            justifyContent="center"
        >
            <Swiper
                color='#FFBA08'
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide color='#FFBA08'>
                    <Flex>
                        <Img rounded={5} src="images/europa.png" />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide color='#FFBA08'>
                    <Flex>
                        <Img rounded={5} src="images/asia.jpg" />
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
}