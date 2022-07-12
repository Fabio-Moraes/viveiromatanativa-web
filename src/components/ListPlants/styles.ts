import styled from 'styled-components';

export const ItemContainer = styled.div`
  border-radius: 4px;
  background-color: #fff;
  height: 120px;
  width: 262px;
  color: #29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;

  > div {
    padding: 0px 0px 0px 100px;

    > h1 {
      margin-bottom: 5px;
      display: block;
      text-align: center;
      font-size: 17px;
    }

    > span {
      display: block;
      text-align: center;
      font-size: 13px;
      background: #ccc;
      padding: 2px 5px;
      border-radius: 30px;
      margin-left: -4px;
    }
    > strong {
      margin-bottom: 5px;
      display: block;
      text-align: center;
      font-size: 14px;
    }
  }
`;

export const Thumbnail = styled.img`
  width: auto;
  height: 100px;
  border: 0;
  vertical-align: middle;
  float: left;
  background: #fff;
`;
