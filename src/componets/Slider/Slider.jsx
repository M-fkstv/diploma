// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper';
import PropTypes from 'prop-types';

import { ItemCard } from '../ItemCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { SliderButton } from '../SliderButton';
import { useSliderStyles } from './slider.styles';
import { useState } from 'react';

export const Slider = ({ className, data }) => {
  const sliderClasses = useSliderStyles();
  const [activeNext, setActiveNext] = useState(true);
  const [activePrev, setActivePrev] = useState(true);

  return (
    <>
      <SliderButton
        className={
          activePrev
            ? sliderClasses.buttonPrev
            : sliderClasses.swiperButtonDisabled
        }
        id={'prevEl'}
      />
      <SliderButton
        className={
          activeNext
            ? sliderClasses.buttonNext
            : sliderClasses.swiperButtonDisabled
        }
        id={'nextEl'}
      />
      <Swiper
        className={className}
        modules={[Navigation, Keyboard]}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        loop={false}
        spaceBetween={16}
        slidesPerView={2}
        onInit={() => setActivePrev(false)}
        onSlideChange={() => setActivePrev(true)}
        // onReachEnd={() => setActiveNext(false)}  // TODO: hide navagation
        // onReachBeginning={() => setActivePrev(false)}
        watchOverflow
        breakpoints={{
          // 0: {
          //   slidesPerView: 1,
          // },
          // 640: {
          //   slidesPerView: 2,
          // },
          800: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: '#nextEl',
          prevEl: '#prevEl',
          clickable: true,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ItemCard sales={true} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};
