import StickBox from 'react-sticky-box';

import { Card } from '../Card';
import { TeamCard } from '../TeamCard';
import { Post } from '../Post';

import { Container, Body } from './styles';

export function SideBar() {
  return (
    <Container>
      <StickBox>
        <Body>
          <Card
            title="Equipe"
            elements={[
              <TeamCard name="James Junio" nickname="@james_junio" />,
              <TeamCard name="Maria Regina" nickname="@Maria_Regina" />,
            ]}
          />

          <Card
            title="IPÊ"
            link="https://www.ipe.org.br/"
            description="Pesquisa, Educação e Negócios Sustentáveis para a conservação da biodiversidade brasileira."
            elements={[
              <Post
                key={String(2)}
                ImageUrl={
                  'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/IPE-na-Virada-Sustentavel-em-parceria-com-UMAPAZ.jpg'
                }
              />,
            ]}
          />

          <Card
            title="ROLEX"
            description={`As mudas são cultivadas a partir de mais de 100 espécies de árvores nativas nos viveiros.`}
            elements={[
              <Post
                key={String(6)}
                ImageUrl={
                  'https://img.welt.de/img/bildergalerien/mobile233462856/7941352947-ci16x9-w1200/The-Rolex-Awards-for-Enterprise-Laury-Cullen-Brazil-2004-laure.jpg'
                }
              />,
            ]}
          />

          <Card
            title="IMPARCIAL"
            link="https://www.imparcial.com.br/noticias/liderancas-femininas-despontam-nos-viveiros-do-pontal-do-paranapanema,45655"
            description={`imparcialLideranças femininas despontam nos viveiros do Pontal do Paranapanema`}
            elements={[
              <Post
                key={String(6)}
                ImageUrl={
                  'https://www.imparcial.com.br//assets/images/galeria/1628897230.jpg'
                }
              />,
            ]}
          />
        </Body>
      </StickBox>
    </Container>
  );
}
