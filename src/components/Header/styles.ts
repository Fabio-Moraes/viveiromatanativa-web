import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Home,
  Grain,
  Article,
  Contacts,
  Plant,
  Gallery,
} from '../../styles/Icons';

export const Container = styled.div`
  user-select: none;

  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 550px) {
    border-left: 1px solid var(--gray);
    border-right: 1px solid var(--gray);
  }
`;

export const Forehead = styled.div`
  z-index: 2;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

`;

interface buttonProps {
  path: string;
}

const activeButtonCSS = css`
  background: #a29995;
`;

const disabledButtonCSS = css`
  &:hover {
    background: rgba(162, 153, 149, 0.3);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Button = styled.button`
  display: flex;
  position: static;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  outline: 0;
  background: #fff;
  border-radius: 5px;
  padding: 1px 10px 1px 10px;

  cursor: pointer;

  ${({ path }: buttonProps) => {
    const location = useLocation();
    return path === location.pathname ? activeButtonCSS : disabledButtonCSS;
  }};
`;

export const LogoImage = styled.img.attrs({
  src: 'https://legpzytiaeepvlgmekfk.supabase.co/storage/v1/object/public/viveiro-mn/header/logo.jpg',
  alt: 'logo.jpg',
  border: '0',
})`
  width: 80px;
  height: 80px;

  border-radius: 50%;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  > strong {
    color: #45342d;
    font-size: 22px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const MenuHeader = styled.div`
  left: 0;
  z-index: 2;
  position: sticky;
  top: 0;

  background: var(--primary);
  width: 100%;

  border-top: 1px solid var(--outline);
  border-bottom: 1.7px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(20px, max(10vw, 10px));

  @media (min-width: 550px) {
    display: none;
  }

  white-space: nowrap;
`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--white);
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const PlantIcon = styled(Plant)`
  ${iconCSS}
`;
export const GalleryIcon = styled(Gallery)`
  ${iconCSS}
`;
export const ContactsIcon = styled(Contacts)`
  ${iconCSS};
`;
