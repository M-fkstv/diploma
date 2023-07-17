// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Keyboard, Navigation } from 'swiper';
import PropTypes from 'prop-types';

import { ItemCard } from '../ItemCard';
import { SliderButton } from '../SliderButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useSliderStyles } from './slider.styles';

export const Slider = ({ className, data }) => {
  const sliderClasses = useSliderStyles();
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(0);

  return (
    <>
      <SliderButton
        className={
          activeSlide === 0
            ? sliderClasses.swiperButtonDisabled
            : sliderClasses.buttonPrev
        }
        id={'prevEl'}
      />
      <SliderButton
        className={
          activeSlide === totalSlides - slidesPerView
            ? sliderClasses.swiperButtonDisabled
            : sliderClasses.buttonNext
        }
        id={'nextEl'}
      />
      <Swiper
        className={className}
        modules={[Navigation, Keyboard]}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        loop={false}
        spaceBetween={16}
        slidesPerView={2}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
          setSlidesPerView(() => swiper.params.slidesPerView);
          setTotalSlides(swiper.slides.length);
        }}
        breakpoints={{
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
        }}>
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
