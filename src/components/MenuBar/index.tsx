import {
  Container,
  Topside,
  Button,
  HomeIcon,
  GalleryIcon,
  PlantIcon,
  Botside,
  Avatar,
  ProfileData,
  ContactsIcon,
} from './styles';

import { useNavigate, useLocation } from 'react-router-dom';

export function MenuBar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container>
      <Topside>
        {/* <Logo/> */}

        <Button
          path={'/'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/');
          }}
        >
          <HomeIcon />
          <span>Inicio</span>
        </Button>

        <Button
          path={'/mudas'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/mudas');
          }}
        >
          <PlantIcon />
          <span>Mudas</span>
        </Button>

        <Button
          path={'/galeria'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/galeria');
          }}
        >
          <GalleryIcon />
          <span>Galeria</span>
        </Button>

        <Button
          path={'/contatos'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/contatos');
          }}
        >
          <ContactsIcon />
          <span>Contatos</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Viveiro Mata Nativa</strong>
          <span>@v.matanativa</span>
        </ProfileData>

      </Botside>
    </Container>
  );
}
