import React from 'react';

export const Button = ({ className, title, onClick, children }) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {title}
      {children}
    </button>
  );
};
