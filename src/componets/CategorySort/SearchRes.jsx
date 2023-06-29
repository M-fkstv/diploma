import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import { CategoryItem } from '../CategoryItem/CategoryItem';

import { useCategoriesStyles } from '../Categories/Categories.styles';
import { useIndexStyles } from '../../../index.styles';
import { useButtonStyles } from '../Button/Button.styles';
import { Button } from '../Button';

export const SearchRes = forwardRef(({ searchResult, title }, ref) => {
  const classes = useCategoriesStyles();
  const indexClasses = useIndexStyles();
  const btnClasses = useButtonStyles();

  const [cardsQuantity, setCardsQuantity] = useState(8);
  const handleShowMore = () => {
    setCardsQuantity((prevState) => prevState + 4);
  };

  if (searchResult.length === 0) {
    return (
      <h3 style={{ textAlign: 'center' }} ref={ref}>
        No beauty products found
      </h3>
    );
  }

  return (
    <section className={classes.root} ref={ref}>
      <h2 className={indexClasses.sectionTitle}>{title}</h2>
      <div className={classes.cardWrapper}>
        {searchResult
          .map((item, index) => {
            return <CategoryItem {...item} key={index} />;
          })
          .slice(0, cardsQuantity)}
      </div>
      {searchResult.length <= cardsQuantity || (
        <Button
          className={btnClasses.showMoreButton}
          title={'Show more'}
          onClick={() => handleShowMore()}
        />
      )}
    </section>
  );
});

SearchRes.propTypes = {
  searchResult: PropTypes.array,
  title: PropTypes.string,
};
