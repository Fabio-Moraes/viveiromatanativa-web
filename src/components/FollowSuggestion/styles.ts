import styled from 'styled-components';

import Button from '../Button';

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
    font-size: 12px;
  }
  > span {
    font-size: 12px;
    color: var(--gray);
  }
`;
export const FollowButton = styled(Button)`
  padding: 6px 9px;
  font-size: 10px;
  left: 70%;
  position: absolute
`;
