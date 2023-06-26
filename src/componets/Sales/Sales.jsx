import React, { useEffect, useState } from 'react';

import { Slider } from '../Slider';
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
  const [inform, setInform] = useState();

  useEffect(() => {
    localStorage.getItem('data')
      ? setInform(JSON.parse(localStorage.getItem('data')))
      : setInform(data);
    if (isSuccess) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, [data, isSuccess]);

  if (isLoading) return <Loader loading={isLoading} />;

  if (inform)
    return (
      <section className={classes.root}>
        <h2 className={indexClasses.sectionTitle}>#MODNIKKY Sale</h2>

        <div className={sliderClasses.wrapper}>
          <Slider className={classes.examples} data={inform} />
        </div>
      </section>
    );
};
