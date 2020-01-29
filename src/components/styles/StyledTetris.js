import styled from 'styled-components';
// BG Image
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${bgImage}) #FFF;
  border: 0;
  background-size: cover;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  margin: 0 auto;
  max-width: 900px;
  aside {
    width: 100%;
    max-width: 250px;
    display: block;
    padding: 0 20px;
  }
`;
