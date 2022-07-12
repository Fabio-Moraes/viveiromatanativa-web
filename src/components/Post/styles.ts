import styled, { css } from 'styled-components';

import { Twitter, Facebook } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-top: 1px solid var(--outline);

  max-width: 100%;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
`;

export const Description = styled.p`
  font-size: 17px;
  margin-top: 4px;
  padding: 10px;
  border: 2px solid var(--outline);
  border-radius: 14px;
  background: rgba(162, 153, 149, 0.3);
`;

export const ImageContent = styled.img`
  margin-top: 12px;

  width: 100%;
  height: auto;

  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%; /** Mobile */

  @media (min-width: 330px) {
    width: 63%; /** Tablet */
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: #007BE5;
    }
  }
  
  &:nth-child(2) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`;

const iconsCSS = css`
  width: 19px;
  height: 19px;
`;

export const FacebookIcon = styled(Facebook)`
  ${iconsCSS}
`;

export const TwitterIcon = styled(Twitter)`
  ${iconsCSS}
`;
