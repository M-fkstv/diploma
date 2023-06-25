import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import { Icon } from '../Icons/Icon';

import { dollar } from '../../constants/toDollar';
import { clearBag, removeBag } from '../../store/slices/bag.slice';
import { useSendOrderMutation } from '../../services/bagAPI';

import { useBagStyles } from './Bag.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';

export const Bag = () => {
  const [response, setResponse] = useState('');

  const bagState = useSelector((state) => state.bag);
  const bagSumm = bagState.reduce((acc, currentValue) => {
    acc += +currentValue.price.value;
    return acc;
  }, 0);
  const dispatch = useDispatch();
  const [sendOrder] = useSendOrderMutation();

  const classes = useBagStyles();
  const iconClasses = useIconStyles();

  const deleteFromBag = (item) => {
    const toDispatch = bagState.filter((bagItem) => bagItem.id !== item.id);
    dispatch(removeBag(toDispatch));
  };

  const body = bagState.map((item) => {
    return item.id;
  });

  const handleProceed = async (e) => {
    e.preventDefault();
    if (bagState.length) {
      const response = await sendOrder({ products: body }).unwrap();
      setResponse(response.message);
      dispatch(clearBag());
    }
  };

  return (
    <article className={classes.root}>
      <p className={classes.title}>
        BAG <span>{bagState.length} items</span>
      </p>
      <hr />
      {bagState.map((item, index) => {
        return (
          <div key={index} className={classes.cardWrapper}>
            <div className={classes.card}>
              <img
                className={classes.cardImage}
                id={item.id}
                src={item.images[0]}
                alt={item.name}
              />
              <div className={classes.cardInfo}>
                <p>{item.name}</p>
                <p>
                  {item.price.currency}
                  {dollar.format(item.price.value / 100)}
                </p>
                <p>COLOR: {item.color.name.toUpperCase()}</p>
                <p>
                  SIZE:
                  <select name="sizes" style={{ border: 0, fontSize: '1rem' }}>
                    {item.availableSizes
                      .join('')
                      .split(',')
                      .map((item, index) => {
                        return (
                          <option
                            style={{ fontSize: '1rem' }}
                            key={index}
                            value={item}>
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </p>
                <p>quantity</p>
              </div>
            </div>
            <button
              className={classes.removeButton}
              onClick={() => deleteFromBag(item)}>
              REMOVE
            </button>
            <hr />
          </div>
        );
      })}
      <div className={classes.amount}>
        <p>TOTAL USD {dollar.format(bagSumm / 100)}</p>

        {response ? (
          <p>{response}</p>
        ) : (
          <Button
            title={'PROCEED TO CHECKOUT'}
            className={classes.bagButton}
            onClick={handleProceed}
          />
        )}
        <div>
          <Icon id="#visa" className={iconClasses.payment} />
          <Icon id="#maestro" className={iconClasses.payment} />
        </div>
      </div>
    </article>
  );
};
