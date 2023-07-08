import React, { useState } from 'react';
import { useInstaBoxStyles } from './InstaBox.styles';
import { useGetSalesQuery } from '../../services/getSales';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { useButtonStyles } from '../Button/Button.styles';

export const InstaBox = () => {
  const classes = useInstaBoxStyles();
  const { data = [], isSuccess } = useGetSalesQuery();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const buttonClasses = useButtonStyles();
  // const localStoreageData = JSON.parse(localStorage.getItem('data')); // for problems whith intermet

  if (isSuccess) {
    // original
    const instaBoxData = data.slice(start, end);

    const incr = () => {
      if (data.length - end > instaBoxData.length) {
        setStart((prevState) => prevState + 1);
        setEnd((prevState) => prevState + 1);
      }
    };

    const decr = () => {
      if (data[0].id !== instaBoxData[0].id) {
        setStart((prevState) => prevState - 1);
        setEnd((prevState) => prevState - 1);
      }
    };

    // const instaBoxData = isSuccess ? data.slice(start, end) : localStoreageData; // for problems whith intermet
    return (
      <section className={classes.root}>
        <div style={{ display: 'inline-flex' }}>
          <Link to="#">Shop in instagramm</Link>
          <span style={{ marginLeft: '16px' }}>shop</span>
          <Button
            onClick={decr}
            // title="shop"
            className={
              start === 0
                ? buttonClasses.displayNone
                : buttonClasses.instaBlockBtnPrev
            }
          />
          <Button
            onClick={incr}
            // title="shop"
            className={buttonClasses.instaBlockBtnNext}
          />
        </div>
        <div className={classes.parent}>
          {instaBoxData.map((item, index) => {
            return (
              <Link to={`/item/id:${item.id}`} state={item} key={index}>
                <img
                  className={classes.image}
                  id={instaBoxData[index].id}
                  src={instaBoxData[index].images[0]}
                  alt={instaBoxData[index].name}
                />
              </Link>
            );
          })}
          {/*.slice(0, 5)}*/}
          {/*  DINAMIC VALUES MOTHER FUCKER !!!!!!!!!!!*/}
          {/*  todo: dinamic classnames*/}
          {/*<Link to="#" className={classes.div1}>*/}
          {/*  <img*/}
          {/*    className={classes.image}*/}
          {/*    id={instaBoxData[0].id}*/}
          {/*    src={instaBoxData[0].images[0]}*/}
          {/*    alt={instaBoxData[0].name}*/}
          {/*  />*/}
          {/*</Link>*/}
          {/*<Link to="#" className={classes.div2}>*/}
          {/*  <img*/}
          {/*    className={classes.image}*/}
          {/*    id={instaBoxData[1].id}*/}
          {/*    src={instaBoxData[1].images[0]}*/}
          {/*    alt={instaBoxData[1].name}*/}
          {/*  />*/}
          {/*</Link>*/}
          {/*<Link to="#" className={classes.div3}>*/}
          {/*  <img*/}
          {/*    className={classes.image}*/}
          {/*    id={instaBoxData[2].id}*/}
          {/*    src={instaBoxData[2].images[0]}*/}
          {/*    alt={instaBoxData[2].name}*/}
          {/*  />*/}
          {/*</Link>*/}
          {/*<Link to="#" className={classes.div4}>*/}
          {/*  <img*/}
          {/*    className={classes.image}*/}
          {/*    id={instaBoxData[3].id}*/}
          {/*    src={instaBoxData[3].images[0]}*/}
          {/*    alt={instaBoxData[3].name}*/}
          {/*  />*/}
          {/*</Link>*/}
          {/*<Link to="#" className={classes.div5}>*/}
          {/*  <img*/}
          {/*    className={classes.image}*/}
          {/*    id={instaBoxData[4].id}*/}
          {/*    src={instaBoxData[4].images[0]}*/}
          {/*    alt={instaBoxData[4].name}*/}
          {/*  />*/}
          {/*</Link>*/}
        </div>
        <p>
          <Link to="#"># modnikky</Link>
        </p>
      </section>
    );
  }
};
