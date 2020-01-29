import React from "react";
import styled from "styled-components";
import href from './href.css';

const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #ff0033;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

const StartButton = ({ callback }) => (
  <>
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
  <div className="href">
   <li>
    <ul>
     <a href="https://www.github.com/Rvkash">Follow me Github</a> 
    </ul>  
   </li>
  </div>
  </>
);



export default StartButton;
