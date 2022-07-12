import styled from 'styled-components';
import { Search } from '../../styles/Icons';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
  justify-content: center;

  > h1 {
    font-size: 20px;
    padding-bottom: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: var(--secondary);

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }
  border: 1.6px solid rgba(69, 52, 45, 0.9);
  outline: 0;

  &:focus {
    border: 1.6px solid var(--twitter);

    ~ svg {
      fill: var(--gray);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  position: absolute;
  fill: var(--gray);
`;

export const SearchWrapper = styled.div`
  position: sticky;
  top: 65px;
  z-index: 2;
  background: var(--primary);
  border-bottom: 1px solid var(--outline);
  max-height: 57px;
  padding: 8px 0 9px 13px;

  @media (min-width: 550px) {
    top: 0px;
  }

  > div {
    width: min(210px, max(45vw, 100px));
  }
`;


