import StickBox from 'react-sticky-box';

import { List } from '../List';
import { FollowSuggestion } from '../FollowSuggestion';
import { News } from '../News';

import {
  Container,
  Body
} from './styles';

export function SideBar() {
  return (
    <Container>
      <StickBox>
        <Body>
          <List
            title="Equipe"
            elements={[
              <FollowSuggestion name="James Junio" nickname="@james_jinio" />,
              <FollowSuggestion name="Lucas Alves" nickname="@lucas_alves" />,
              <FollowSuggestion name="Edson Mateus" nickname="@edson_mateus" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickBox>
    </Container>
  );
}
