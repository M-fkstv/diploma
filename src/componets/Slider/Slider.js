// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PropTypes from 'prop-types';

import { ItemCard } from '../ItemCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

export const Slider = ({ className, data }) => {
  return (
    <Swiper
      className={className}
      modules={[Navigation]}
      loop={true}
      spaceBetween={16}
      slidesPerView={4}
      breakpoints={{
        // mobile + tablet - 320-990
        320: {
          slidesPerView: 1,
        },
        641: {
          slidesPerView: 2,
        },
        // desktop >= 991
        991: {
          slidesPerView: 3,
        },
        1120: {
          slidesPerView: 4,
        },
        // 960: {
        //   slidesPerView: 3,
        // },
        // 640: {
        //   slidesPerView: 2,
        // },
        // 560: {
        //   slidesPerView: 1,
        // },
      }}
      navigation={{
        nextEl: '#nextEl',
        prevEl: '#prevEl',
        clickable: true,
        loop: true,
      }}>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <ItemCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};
