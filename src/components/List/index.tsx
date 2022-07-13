import React from 'react';

import { Container, Item } from './styles';

interface Props {
  description?: string;
  elements?: React.ReactNode[];
  link?: string;
  title: string;
}

export function List({ description, elements, link, title }: Props) {
  return (
    <Container>
      <a href={link}>
        <Item>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </Item>
        {elements?.map((element, index) => (
          <Item key={index}>{element}</Item>
        ))}
      </a>
    </Container>
  );
}
