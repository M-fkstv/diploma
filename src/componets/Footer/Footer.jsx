import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useTheme } from 'react-jss';

import { useSubscriptionMutation } from '../../services/subscribeApi';

import { FooterContacts } from './FooterContacts';

import { useFooterStyles } from './footer.styles';
import { useButtonStyles } from '../Button/Button.styles';

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
                variant="standard">
                <InputLabel sx={{ fontSize: '1.25rem' }} htmlFor="footer-email">
                  Your email address
                </InputLabel>
                <Input fullWidth id="footer-email" type="email" name="email" />
              </FormControl>
              <Button
                type="submit"
                variant="text"
                className={buttonClasses.signUpButton}>
                JOIN
              </Button>
            </form>
          </div>
        )}
      </div>

      <div className={classes.body}>
        <FooterContacts />
      </div>
    </footer>
  );
};
