import React, { useId } from 'react';
import { useFormStyles } from './Form.styles';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { useButtonStyles } from '../Button/Button.styles';

export const Form = ({ title, onSubmit }) => {
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const checkBoxId = useId();
  const classes = useFormStyles();
  const btnClasses = useButtonStyles();

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {/*<label htmlFor={firstNameId}>First name</label>*/}
      <input
        className={classes.input}
        id={firstNameId}
        type="text"
        name="First name"
        placeholder="First name"
      />
      {/*<label htmlFor={lastNameId}>Last name</label>*/}

      <input
        className={classes.input}
        id={lastNameId}
        type="text"
        name="Last name"
        placeholder="Last name"
      />
      {/*<label htmlFor={emailId}>email</label>*/}
      <input
        className={classes.input}
        id={emailId}
        name="email"
        type="email"
        placeholder="Email"
      />

      {/*<label htmlFor={passwordId}>Password</label>*/}
      <input
        className={classes.input}
        id={passwordId}
        name="password"
        type="password"
        placeholder="Password"
      />

      <div className={classes.checkboxWrapper}>
        <input
          id={checkBoxId}
          name="checkBox"
          type="checkbox"
          className={classes.checkbox}
        />
        <label htmlFor={checkBoxId}>
          Let's get personal! We'll send you only the good stuff: <br /> early
          access to Sale, new arrivals and promotions. No nasties.
        </label>
      </div>
      <p className={classes.descr}>
        By signing up you agree to <Link to="#">Terms of Service</Link> and{' '}
        <Link to="#">Privacy Policy</Link>
      </p>

      <Button title={title} className={btnClasses.formButton} />
    </form>
  );
};
