import { ItemContainer, Thumbnail } from './styles';

interface ListProps {
  image: string;
  title: string;
  description: string;
}

export function ListPlants(props: ListProps) {
  return (
    <ItemContainer>
      <Thumbnail src={props.image} />
      <div>
        <h1>{props.title}</h1>
        <span>Nome Ciêntifico:</span>
        <strong>{props.description}</strong>
      </div>
    </ItemContainer>
  );
}
