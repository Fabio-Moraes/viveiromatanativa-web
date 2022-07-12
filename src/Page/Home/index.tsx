import { Feed } from '../../components/Feed';

import {
  Container,
  Banner,
  ProfileData,
  LocationIcon,
  Imagen,
  CakeIcon,
} from './styles';

export function Home() {
  return (
    <Container>
      <Banner>
        <Imagen />
      </Banner>

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
      <Feed />
    </Container>
  );
}
