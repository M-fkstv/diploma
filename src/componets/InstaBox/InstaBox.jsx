import React, { useState } from 'react';
import { useInstaBoxStyles } from './InstaBox.styles';
import { useGetSalesQuery } from '../../services/getSales';
import { Link } from 'react-router-dom';

export const InstaBox = () => {
  const classes = useInstaBoxStyles();
  const { data, isSuccess } = useGetSalesQuery();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  // const localStoreageData = JSON.parse(localStorage.getItem('data'));

  const incr = () => {
    setStart((prevState) => prevState + 1);
    setEnd((prevState) => prevState + 1);
  };
  //
  if (isSuccess) {
    // original
    const instaBoxData = data.slice(start, end);
    console.log(instaBoxData);

    // const instaBoxData = isSuccess ? data.slice(start, end) : localStoreageData; // for problems whith intermet
    return (
      <section className={classes.root}>
        <div>
          <Link to="#">Shop in instagramm</Link>
          <button onClick={() => incr()}>Next </button>
        </div>
        <div className={classes.parent}>
          <Link to="#" className={classes.div1}>
            <img
              className={classes.image}
              id={instaBoxData[0].id}
              src={instaBoxData[0].images[0]}
              alt={instaBoxData[0].name}
            />
          </Link>
          <Link to="#" className={classes.div2}>
            <img
              className={classes.image}
              id={instaBoxData[1].id}
              src={instaBoxData[1].images[0]}
              alt={instaBoxData[1].name}
            />
          </Link>
          <Link to="#" className={classes.div3}>
            <img
              className={classes.image}
              id={instaBoxData[2].id}
              src={instaBoxData[2].images[0]}
              alt={instaBoxData[2].name}
            />
          </Link>
          <Link to="#" className={classes.div4}>
            <img
              className={classes.image}
              id={instaBoxData[3].id}
              src={instaBoxData[3].images[0]}
              alt={instaBoxData[3].name}
            />
          </Link>
          <Link to="#" className={classes.div5}>
            <img
              className={classes.image}
              id={instaBoxData[4].id}
              src={instaBoxData[4].images[0]}
              alt={instaBoxData[4].name}
            />
          </Link>
        </div>
        <p>
          <Link to="#"># modnikky</Link>
        </p>
      </section>
    );
  }
};
