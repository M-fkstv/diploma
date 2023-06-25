import React, { Suspense } from 'react';
import { Header } from '../Header';

import { useSelector } from 'react-redux';

import { Sales } from '../Sales';
import { Categories } from '../Categories';

import { InstaBox } from '../InstaBox';

import { Footer } from '../Footer';
import { SortByCategory } from '../CategorySort';
import { SearchRes } from '../CategorySort/SearchRes';
import { TopSection } from '../TopSection';

export const App = () => {
  const category = useSelector((state) => state.category);
  const searchResult = useSelector((state) => state.searchResult);

  return (
    <>
      <Header />
      <TopSection />
      {searchResult && (
        <SearchRes searchResult={searchResult} title={'Search Result'} />
      )}
      <Categories />
      {category && <SortByCategory />}{' '}
      {/*or <SearchRes searchResult={searchResult} title={'Search Result'} />*/}
      <Sales />
      <InstaBox />
      <Footer />
      {/*<SimpleAccordion />*/}
      {/*<MyComponent />*/}
    </>
  );
};
