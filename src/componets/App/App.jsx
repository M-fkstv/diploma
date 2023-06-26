import React from 'react';

import { useSelector } from 'react-redux';

import { Categories } from '../Categories';
import { SortByCategory } from '../CategorySort';
import { SearchRes } from '../CategorySort/SearchRes';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { InstaBox } from '../InstaBox';
import { Sales } from '../Sales';
import { TopSection } from '../TopSection';

export const App = () => {
  const category = useSelector((state) => state.category);
  const searchResult = useSelector((state) => state.searchResult);

  return (
    <>
      <Header />
      <main>
        <TopSection />
        {searchResult && (
          <SearchRes searchResult={searchResult} title={'Search Result'} />
        )}
        <Categories />
        {category && <SortByCategory />}{' '}
        {/*or <SearchRes searchResult={searchResult} title={'Search Result'} />*/}
        <Sales />
        <InstaBox />
      </main>

      <Footer />
      {/*<SimpleAccordion />*/}
      {/*<MyComponent />*/}
    </>
  );
};
