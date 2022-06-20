import styled from 'styled-components';

export const P = styled.p`
  &.phrase{
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    padding: 1rem;
    &.selected{
      background-color: pink;
    }
  }
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  height: 3rem;
`;