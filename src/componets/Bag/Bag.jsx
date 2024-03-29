import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import { dollar } from '../../constants/toDollar';
import { clearBag, removeBag } from '../../store/slices/bag.slice';
import { useSendOrderMutation } from '../../services/bagAPI';

import { Button } from '../Button';
import { Icon } from '../Icons/Icon';

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
      {bagState
        .filter((item, index) => {
          return bagState.findIndex((i) => i.id === item.id) === index;
        })
        .map((item, index) => {
          return (
            <div key={index} className={classes.cardWrapper}>
              <div className={classes.card}>
                <Link
                  to={`/item/id:${item.id}`}
                  state={item}
                  style={{ display: 'contents' }}>
                  <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={true}
                    style={{ width: '50%', margin: 0 }}>
                    {item.images.map((img, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <img
                            className={classes.cardImage}
                            id={item.id}
                            src={item.images[index]}
                            alt={item.name}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Link>

                <div className={classes.cardInfo}>
                  <p>{item.name}</p>
                  <p>
                    {item.price.currency}
                    {dollar.format(item.price.value / 100)}
                  </p>
                  <p>COLOR: {item.color.name.toUpperCase()}</p>
                  <p>
                    SIZE:
                    <select
                      name="sizes"
                      style={{ border: 0, fontSize: '1rem' }}>
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
                  <p>
                    quantity : {bagState.filter((i) => i.id === item.id).length}{' '}
                  </p>
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
