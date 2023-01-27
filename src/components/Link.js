import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  text-decoration: none;
  color: #222;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
