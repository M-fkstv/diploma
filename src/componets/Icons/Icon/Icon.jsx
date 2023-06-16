import React from 'react';

import './Icon.style';

export const Icon = ({ id, className }) => (
  <svg className={className}>
    <use href={id} />
  </svg>
);
