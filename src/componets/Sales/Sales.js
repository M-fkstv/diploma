import React from 'react';

import { Slider } from '../Slider';
import { SliderButton } from '../SliderButton';
import { Loader } from '../Loader';

import { useGetSalesQuery } from '../../services/getSales';

import { useSliderStyles } from '../Slider/slider.styles';
import { useSalesStyles } from './sales.styles';
import { useIndexStyles } from '../../../index.styles';

export const Sales = () => {
  const classes = useSalesStyles();
  const sliderClasses = useSliderStyles();
  const indexClasses = useIndexStyles();
  const { data, isLoading, isSuccess } = useGetSalesQuery();

  let inform;

  localStorage.getItem('data')
    ? (inform = JSON.parse(localStorage.getItem('data')))
    : (inform = data);
  if (isSuccess) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  if (isLoading) return <Loader loading={isLoading} />;

  if (inform)
    return (
      <section className={classes.root}>
        <h2 className={indexClasses.sectionTitle}>#MODNIKKY Sale</h2>

        <div className={sliderClasses.wrapper}>
          <SliderButton className={sliderClasses.buttonPrev} id={'prevEl'} />
          <SliderButton className={sliderClasses.buttonNext} id={'nextEl'} />
          <Slider className={classes.examples} data={inform} />
        </div>
      </section>
    );
};
