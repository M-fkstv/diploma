import React from 'react';
import { useLocation } from 'react-router-dom';
import { FullItemCard } from '../componets/FullItemCard';

import '../../index.css';
import { Header } from '../componets/Header';
import { Footer } from '../componets/Footer';

const CardPage = () => {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <Header />
      <FullItemCard />
      <Footer />
    </>
  );
};

export default CardPage;
