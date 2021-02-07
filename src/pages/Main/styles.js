import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${(props) =>
    props.error ? 'red' : '#7159c1'}; /* styling based on props state */
  font-family: Arial, Helvetica, sans-serif;

  small {
    /* chaining */
    font-size: 14px;
    color: #333;
  }
`;
