import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModalMaskStyles } from './ModalMask.styles';
import { useDispatch } from 'react-redux';
import { useGetSalesQuery } from '../../services/getSales';
import { setSearchResult } from '../../store/slices/search.slice';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const ModalMask = forwardRef((_, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const classes = useModalMaskStyles();

  const dispatch = useDispatch();
  const { data, isSuccess } = useGetSalesQuery();

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }));

  function openModal() {
    document.body.style.overflow = 'hidden';
    setShowModal(true);
  }

  function closeModal() {
    document.body.style.overflow = 'auto';
    setShowModal(false);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && isSuccess) {
      const res = data.filter((item) => {
        return (
          item.type.toLowerCase().includes(value) ||
          item.name.toLowerCase().includes(value)
        );
      });
      dispatch(setSearchResult(res));
      setValue('');
      closeModal();
      if (location.pathname !== '/') {
        navigate('/');
      }
    }
  };

  return (
    showModal &&
    createPortal(
      <>
        <div className={classes.root}>
          <button className={classes.closeButton} onClick={closeModal}></button>
          <input
            className={classes.textField}
            type="text"
            placeholder="ENTER SEARCH TERMS"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </>,
      document.body,
    )
  );
});
