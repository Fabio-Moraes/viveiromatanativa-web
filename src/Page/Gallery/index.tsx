import { Post } from '../../components/Post';
import PLANTS from '../../Api/plants';

import {
  Container,
  Banner,
  ProfileData,
  Imagen,
  Wrapper,
  Tab,
  Tweets,
} from './styles';

export function Gallery() {
  return (
    <Container>
      <ProfileData>
        <h1>
          Venha conhecer o Viveiro Mata Nativa, qualidade em primeiro lugar.
          🌱🌿
        </h1>

        <p>
          Apoio:{' '}
          <a href="https://www.ipe.org.br/">
            IPÊ - Instituto de Pesquisas Ecológicas.{' '}
          </a>
        </p>
      </ProfileData>

      <Wrapper>
        <Tab>DESTAQUES DO VIVEIRO</Tab>
        <Tweets>
          {PLANTS?.map((item, index) => {
            if (
              item.image !==
              'https://legpzytiaeepvlgmekfk.supabase.co/storage/v1/object/public/viveiro-mn/mudas/planticon.png?t=2022-07-12T12%3A40%3A01.748Z'
            ) {
              return (
                <Post
                  key={String(index)}
                  ImageUrl={item.image}
                  description={item.title}
                />
              );
            }
          })}
        </Tweets>
      </Wrapper>
    </Container>
  );
}
