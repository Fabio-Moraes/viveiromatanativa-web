import { ItemContainer, Thumbnail } from './styles';

interface PropsCard {
  image: string;
  title: string;
  description: string;
}

export function PlantCard(props: PropsCard) {
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
