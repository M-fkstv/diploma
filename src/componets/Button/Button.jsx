import React from 'react';

export const Button = ({ className, title, onClick, children, dis }) => {
  return (
    <button
      disabled={dis}
      type="submit"
      className={className}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};
