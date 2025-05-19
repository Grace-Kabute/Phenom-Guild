'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';


const images = [
  { src: '/phenom-001.jpg', alt: 'Modern bungalow' },
  { src: '/phenom-002.jpg', alt: 'Contemporary villa' },
  { src: '/hero.jpg', alt: 'Rooftop view' }
];

export default function MobileCarousel() {
  return (
    <div className="block sm:hidden mt-8 px-4 img-mbl">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[65vw] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
