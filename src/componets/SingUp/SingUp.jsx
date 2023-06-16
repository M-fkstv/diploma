import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { setUser } from '../../store/slices/user.slice';

import { Form } from '../Form';

import { useFormStyles } from '../Form/Form.styles';

export const SingUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useFormStyles();
  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate('/login');
      })
      .catch(console.error);
  };

  return (
    <div className={classes.bcg}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Create account</h1>
        <Form title="Regirster" onSubmit={handleRegister} />
        <p className={classes.descr}>
          <Link to="/login">I HAVE AN ACCOUNT</Link>
        </p>
      </div>
    </div>
  );
};
