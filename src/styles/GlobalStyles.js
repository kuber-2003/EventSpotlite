// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa; /* Light background color */
    color: #333; /* Dark text color */
    line-height: 1.6;
  }

  h1, h2, h3 {
    margin-bottom: 10px;
    color: #2c3e50; /* Darker color for headings */
  }

  p {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #3498db; /* Link color */
    transition: color 0.3s ease;

    &:hover {
      color: #2980b9; /* Darker shade on hover */
    }
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    background-color: #4b79a1; /* Primary button color */
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #3a5a7e; /* Darker button color on hover */
    }
  }
`;

export default GlobalStyle;
