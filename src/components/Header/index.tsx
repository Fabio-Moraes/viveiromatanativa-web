import {
  Forehead,
  LogoImage,
  ProfileInfo,
  MenuHeader,
  HomeIcon,
  GalleryIcon,
  ContactsIcon,
  PlantIcon,
  Title,
  Button,
} from './styles';

import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Forehead>
        <LogoImage />
        <ProfileInfo>
          <strong>VIVEIRO MATA NATIVA</strong>
          <span>Teodoro Sampaio</span>
        </ProfileInfo>
      </Forehead>

      <MenuHeader>
        <Button
          path={'/'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/');
          }}
        >
          <HomeIcon />
          <Title>Inicio</Title>
        </Button>

        <Button
          path={'/mudas'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/mudas');
          }}
        >
          <PlantIcon />
          <Title>Mudas</Title>
        </Button>

        <Button
          path={'/galeria'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/galeria');
          }}
        >
          <GalleryIcon />
          <Title>Galeria</Title>
        </Button>

        <Button
          path={'/contatos'}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/contatos');
          }}
        >
          <ContactsIcon />
          <Title>Contatos</Title>
        </Button>
      </MenuHeader>
    </>
  );
}
