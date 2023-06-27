import React from 'react';
import { useDispatch } from 'react-redux';

import { Icon } from '../Icons/Icon';
import { categoriesConfig } from './Categories.config';

import { useGetSalesQuery } from '../../services/getSales';
import { setCategory } from '../../store/slices/category.slice';

import { useCategoriesStyles } from './Categories.styles';
import { useIndexStyles } from '../../../index.styles';

export const Categories = () => {
  const dispatch = useDispatch();
  const { data = [], isSuccess } = useGetSalesQuery();

  const result = (e) => {
    if (isSuccess) {
      const filter = data.filter((item) => {
        return item.type === e.currentTarget.id;
      });
      dispatch(setCategory(filter));
    }
  };

  const classes = useCategoriesStyles();
  const indexClasses = useIndexStyles();

  return (
    <article className={classes.root}>
      <h2 className={indexClasses.sectionTitle}>Shop by the Category</h2>
      <section className={classes.wrapper}>
        {categoriesConfig.map((item, index) => {
          return (
            <div
              key={index}
              className={classes.card}
              onClick={result}
              id={item.title}>
              <Icon id={item.id} className={classes.icon} />
              <p className={classes.subtitle}>{item.title}</p>
            </div>
          );
        })}
      </section>
      {/*{state.length !== 0 && (*/}
      {/*  <section className={classes.root}>*/}
      {/*    <h2 className={indexClasses.sectionTitle}>{state[0].type}</h2>*/}
      {/*    <div className={classes.cardWrapper}>*/}
      {/*      {state.map((item, index) => {*/}
      {/*        return <CategoryItem {...item} key={index} />;*/}
      {/*      })}*/}
      {/*    </div>*/}
      {/*  </section>*/}
      {/*)}*/}
    </article>
  );
};
