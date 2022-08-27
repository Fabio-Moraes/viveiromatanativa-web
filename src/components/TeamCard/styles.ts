import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: left;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 15px;
  }
  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;
