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

export const Container = styled.div`
  margin:0;
  padding:0;
  background-image: url(${props => props.img});
  height: 100%;
`;