import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../Icons/Icon';

import { useSubscriptionMutation } from '../../services/subscribeApi';

import { useFooterStyles } from './footer.styles';
import { useIconStyles } from '../Icons/Icon/Icon.style';
import { MyComponent } from '../../test';

export const Footer = () => {
  const [response, setResponse] = useState('');
  const classes = useFooterStyles();
  const iconClasses = useIconStyles();

  const [subscription] = useSubscriptionMutation();

  const handleSubscription = async (e) => {
    e.preventDefault();
    const userEmail = new FormData(e.target).get('email');
    const response = await subscription({ email: userEmail }).unwrap();
    setResponse(response.message);
  };

  return (
    <footer className={classes.root}>
      <div className={classes.header}>
        <h2 className={classes.title}>SIGN UP FOR UPDATES</h2>
        <p>Sign up for exclusive early sale access and tailored new arrival</p>
        {response ? (
          <p>{response}</p>
        ) : (
          <div className={classes.signUp}>
            <form onSubmit={handleSubscription}>
              <input
                name="email"
                type="text"
                placeholder="Your email address"
                className={classes.signUpTextField}
              />
              <button className={classes.signUpButton}>JOIN</button>
            </form>
          </div>
        )}
      </div>
      <div></div>
      <div className={classes.body}>
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <h3 className={classes.subTitle}>CUSTOMER SERVICE</h3>*/}
        {/*  </li>*/}
        {/*  <li>CONTACT</li>*/}
        {/*  <li>TRACK ORDER</li>*/}
        {/*  <li>DELIVERY & RETURN</li>*/}
        {/*  <li>PAYMENT</li>*/}
        {/*  <li>MAKE A RETURN</li>*/}
        {/*  <li>FAQ</li>*/}
        {/*</ul>*/}
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <h3 className={classes.subTitle}>INFO</h3>*/}
        {/*  </li>*/}
        {/*  <li>GIFT VOUCHERS</li>*/}
        {/*  <li>SIZE GUIDE</li>*/}
        {/*  <li>CAREER AT MODNIKKY</li>*/}
        {/*  <li>ABOUT US</li>*/}
        {/*  <li>LEGAL POLICIES</li>*/}
        {/*</ul>*/}
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <h3 className={classes.subTitle}>FOLLOW US</h3>*/}
        {/*  </li>*/}

        {/*  <li>*/}
        {/*    <Link to="#">*/}
        {/*      <Icon id="#facebook" className={iconClasses.footerIcon} />{' '}*/}
        {/*      FACEBOOK*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="#">*/}
        {/*      <Icon id="#odnoklassniky" className={iconClasses.footerIcon} />{' '}*/}
        {/*      ODNOCLASSNIKI*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="#">*/}
        {/*      <Icon id="#instagramm" className={iconClasses.footerIcon} />{' '}*/}
        {/*      INSTAGRAMM*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <h3 className={classes.subTitle}>CONTACT US</h3>*/}
        {/*  </li>*/}
        {/*  <li>hello@modnikky.com</li>*/}
        {/*  <li>+7 910 832 26XX</li>*/}
        {/*  <li>*/}
        {/*    Visit us at Shalalaeva 23,*/}
        {/*    <br /> Bologoe, Russia*/}
        {/*  </li>*/}
        {/*</ul>*/}
        <MyComponent />
      </div>
    </footer>
  );
};
