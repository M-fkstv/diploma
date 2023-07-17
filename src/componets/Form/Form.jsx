import React, { useId, useState } from 'react';
import { useFormStyles } from './Form.styles';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { useButtonStyles } from '../Button/Button.styles';
import { FormControl, InputAdornment, InputLabel, Input } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const Form = ({ title, onSubmit }) => {
  const checkBoxId = useId();
  const classes = useFormStyles();
  const btnClasses = useButtonStyles();

  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <FormControl sx={{ padding: 0, width: '100%' }} variant="standard">
        <InputLabel sx={{ fontSize: '1rem' }} htmlFor="First name">
          First name
        </InputLabel>
        <Input fullWidth id="First name" type="text" name="First name" />
      </FormControl>

      <FormControl sx={{ padding: 0, width: '100%' }} variant="standard">
        <InputLabel sx={{ fontSize: '1rem' }} htmlFor="Last name">
          Last name
        </InputLabel>
        <Input fullWidth id="Last name" type="text" name="Last name" />
      </FormControl>

      <FormControl sx={{ padding: 0, width: '100%' }} variant="standard">
        <InputLabel sx={{ fontSize: '1rem' }} htmlFor="email">
          Email
        </InputLabel>
        <Input fullWidth id="email" type="email" name="email" />
      </FormControl>

      <FormControl sx={{ padding: 0, width: '100%' }} variant="standard">
        <InputLabel sx={{ fontSize: '1rem' }} htmlFor="password">
          Password
        </InputLabel>
        <Input
          fullWidth
          name="password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <div className={classes.checkboxWrapper}>
        <input
          checked={checked}
          onChange={handleCheck}
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

      <Button dis={!checked} title={title} className={btnClasses.formButton} />
    </form>
  );
};
