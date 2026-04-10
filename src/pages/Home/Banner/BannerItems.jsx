import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/Slide 1.jpg";
import slide2 from "../../../assets/Slide 2.jpg";
import slide3 from "../../../assets/Slide 3.jpg";
import slide4 from "../../../assets/Slide 4.jpg";
import slide5 from "../../../assets/Slide 5.jpg";
import slide6 from "../../../assets/Slide 6.jpg";
import slide7 from "../../../assets/Slide 7.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const BannerItems = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

    return (
        <section>
        <SectionTitle
        subHeading={"From 10:00am to 08:00pm"}
        heading={"Shop Collection"}
        ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper max-w-5xl mx-auto mt-10"
            >
                {slides.map((image, index) => (
                    <SwiperSlide key={index} className="h-64 mb-10">
                        <img
                            className="w-full h-full object-cover rounded-lg shadow-md"
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BannerItems;