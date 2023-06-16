import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { setUser } from '../../store/slices/user.slice';

import { Form } from '../Form';

import { useFormStyles } from '../Form/Form.styles';

export const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useFormStyles();

  const handleLogin = (event) => {
    event.preventDefault();
    const auth = getAuth();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return (
    <div className={classes.bcg}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>SING IN</h1>
        <Form title="Sing up" onSubmit={handleLogin} />
        <p className={classes.descr}>
          <Link to="/register">REGISTER</Link>
        </p>
      </div>
    </div>
  );
};
