import { useEffect, useState } from 'react';
import { ListPlants } from '../../components/ListPlants';
import { ListContainer } from './styles';
import { SearchBar } from '../../components/SearchBar';
interface ListProps {
  url: string;
  image: string;
  title: string;
  price: string;
}

export function Plants() {
  return (
    <>
      <hr />
      <SearchBar />
    </>
  );
}
