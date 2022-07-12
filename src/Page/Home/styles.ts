import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow: auto;

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 300px);
  width: auto;
  height: auto;

  background: var(--twitter);
  position: relative;
`;

export const Imagen = styled.img.attrs({
  src: 'https://legpzytiaeepvlgmekfk.supabase.co/storage/v1/object/public/viveiro-mn/header/banner.jpg',
  border: '0'
})`
  flex-shrink: 0;

  max-width: 100%;
  height: min(33vw, 300px);
  width: auto;
  height: auto;

  background: var(--twitter);
  position: relative;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 20px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
    margin-top: -5px;
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;

      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;
