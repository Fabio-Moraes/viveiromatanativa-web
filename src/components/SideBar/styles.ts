import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;

    width: min(300px, 100%);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;
