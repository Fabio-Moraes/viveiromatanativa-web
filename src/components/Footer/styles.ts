import styled from 'styled-components'

export const Container = styled.div`
  z-index: 1000;
  position: absolute;
  bottom: 0;

  width: min(601px, 100%);

  > h1 {
    font-size: 12px;
    text-align: center;
    margin-right: 14px;
  }

  > span {
    display: block;
    font-size: 12px;
    text-align: center;
    padding-bottom: 30px;
  }
  
`;