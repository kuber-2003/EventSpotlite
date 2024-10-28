import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = ({ children, onClick }) => (
  <StyledButton
    onClick={onClick}
    whileTap={{ scale: 0.95 }} // Scale down slightly on click
  >
    {children}
  </StyledButton>
);

// Styled component for the button
const StyledButton = styled(motion.button)`
  // background-color: #4b79a1;
  // color: #fff;
  // padding: 10px 20px;
  // border: none;
  // border-radius: 8px;
  // font-size: 16px;
  // cursor: pointer;
  // transition: background-color 0.3s ease;

  // &:hover {
  //   background-color: #3a5a7e;
  // }

  // &:active {
  //   background-color: #324b66;
  // }
  button {
  background-color: #4b79a1;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #3a5a7e;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}

button:active {
  background-color: #324b66;
  transform: scale(0.98);
}

`;

export default Button;
