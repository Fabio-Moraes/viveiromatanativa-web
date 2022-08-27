import React, { useState } from 'react';
import {
  ListContainer,
  Input,
  SearchWrapper,
  SearchIcon,
} from './styles';
import { PlantCard } from '../PlantCard';
import PLANTS from '../../Api/plants';

interface ListProps {
  image: string;
  title: string;
  description: string;
}

export function SearchBar() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState<ListProps[]>(PLANTS);

  const filter = (e: any) => {
    const keyword = e.target.value;
    window.scrollTo(0, 0);
    
    if (keyword !== '') {
      const results = PLANTS.filter((user: any) => {
        return (
          `${user.title.toLowerCase()} + ${user.description.toLowerCase()}`.indexOf(
            keyword.toLowerCase()
          ) !== -1
        );
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(PLANTS);
    }

    setName(keyword);
  };

  return (
    <>
      <SearchWrapper>
        <div>
          <Input
            type="search"
            value={name}
            onChange={filter}
            placeholder="Filtrar mudas..."
          />
          <SearchIcon />
        </div>
      </SearchWrapper>
      <ListContainer>
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((PLANTS, index) => (
            <PlantCard
              key={String(index)}
              title={PLANTS.title}
              image={PLANTS.image}
              description={PLANTS.description}
            />
          ))
        ) : (
          <h1>Nenhuma espécie encontrada!</h1>
        )}
      </ListContainer>
    </>
  );
}
