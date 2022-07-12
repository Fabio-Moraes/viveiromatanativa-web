import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

import {
  Home,
  FilePerson,
  ExitToApp,
  Gallery,
  Contacts,
  Plant,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 25px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1065px) {
    align-items: flex-start;
  }
`;

interface buttonProps {
  path?: string;
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
  align-items: center;
  flex-shrink: 0;
  margin: 5px;
  padding: 10px 12px 10px 12px;
  border-radius: 5px;

  > span {
    display: none;
  }

  @media (min-width: 1065px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 14px;
    }

    padding-right: 15px;
  }

  outline: 0;

  ${({ path }: buttonProps) => {
    const location = useLocation();
    return path === location.pathname ? activeButtonCSS : disabledButtonCSS;
  }};
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS};
`;

export const ContactsIcon = styled(Contacts)`
  ${iconCSS};
`;

export const GalleryIcon = styled(Gallery)`
  ${iconCSS};
`;

export const PlantIcon = styled(Plant)`
  ${iconCSS};
`;

export const Botside = styled.div`
  margin-top: 20;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.img.attrs({
  src: 'https://i.ibb.co/hmckBz5/106336724-134856208237690-2789318651588198411-n.jpg',
  alt: '106336724-134856208237690-2789318651588198411-n',
  border: '0',
})`
  display: none;

  @media (min-width: 1065px) {
    display: flex;
    width: 59px;
    height: 59px;

    margin-right: 10px;
    flex-shrink: 0;
    border-radius: 50%;
  }
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1065px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 12px;

    > span {
      color: var(--gray);
    }
  }
`;