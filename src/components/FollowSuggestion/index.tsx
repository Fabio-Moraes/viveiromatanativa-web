import { Container, Avatar, Info } from './styles';

interface Props {
  name: string;
  nickname: string;
}

export function FollowSuggestion({ name, nickname }: Props) {
  return (
    <Container>
      <div>
        <Avatar />
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
    </Container>
  );
}
