import React, { useState } from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { useSelector } from 'react-redux';
import { useCategoriesStyles } from '../Categories/Categories.styles';
import { useIndexStyles } from '../../../index.styles';
import { Button } from '../Button';
import { useButtonStyles } from '../Button/Button.styles';

export const SortByCategory = () => {
  const classes = useCategoriesStyles();
  const indexClasses = useIndexStyles();
  const btnClasses = useButtonStyles();

  const [cardsQuantity, setCardsQuantity] = useState(8);
  const category = useSelector((state) => state.category);

  const handleShowMore = () => {
    setCardsQuantity((prevState) => prevState + 4);
  };

  if (category.length === 0) {
    return <h3 style={{ textAlign: 'center' }}>No beauty products found</h3>;
  }
  return (
    <section className={classes.root}>
      <h2 className={indexClasses.sectionTitle}>{category[0].type}</h2>
      <div className={classes.cardWrapper}>
        {category
          .map((item, index) => {
            return <CategoryItem {...item} key={index} />;
          })
          .slice(0, cardsQuantity)}
      </div>
      {category.length <= cardsQuantity || (
        <Button
          className={btnClasses.showMoreButton}
          title={'Show more'}
          onClick={() => handleShowMore()}
        />
      )}
    </section>
  );
};
