import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';

import { useSubscriptionMutation } from '../../services/subscribeApi';

import { FooterContacts } from './FooterContacts';

import { useFooterStyles } from './footer.styles';
import { useButtonStyles } from '../Button/Button.styles';
import { useTheme } from 'react-jss';

export const Footer = () => {
  const [response, setResponse] = useState('');
  const theme = useTheme();
  const classes = useFooterStyles();
  const buttonClasses = useButtonStyles(theme);

  const [subscription] = useSubscriptionMutation();

  const handleSubscription = async (e) => {
    e.preventDefault();
    const userEmail = new FormData(e.target).get('email');
    console.log(userEmail);
    const response =
      userEmail && (await subscription({ email: userEmail }).unwrap());
    setResponse(response.message);
  };
  // TODO: error msg from error response "Invalid value" for input
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
              <FormControl
                sx={{ padding: 0, width: '100%' }}
                variant="standard"
              >
                <InputLabel sx={{ fontSize: '1.25rem' }} htmlFor="footer-email">
                  Your email address
                </InputLabel>
                <Input fullWidth id="footer-email" type="email" name="email" />
              </FormControl>
              {/*<button className={buttonClasses.signUpButton}>JOIN</button>*/}
              <Button
                type="submit"
                variant="text"
                className={buttonClasses.signUpButton}
              >
                JOIN
              </Button>
            </form>
          </div>
        )}
      </div>

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
        <FooterContacts />
      </div>
    </footer>
  );
};
