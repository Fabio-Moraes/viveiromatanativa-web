import styled from 'styled-components';

interface PropsType {
  href: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 14px;
  padding-bottom: 2px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  /* & + div {
    border-top: 1px solid var(--outline);
} */

  > h1 {
    font-weight: border;
    font-size: 18px;
    padding-bottom: 5px;
  }

  > h2 {
    font-weight: border;
    font-size: 15px;
    font-weight: normal;
  }

  > a {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
