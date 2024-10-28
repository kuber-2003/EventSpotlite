// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaSearch } from 'react-icons/fa';

// const Navbar = ({ events, onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
    
//     // Filter suggestions based on search input
//     if (value) {
//       const filteredSuggestions = events.filter(event =>
//         event.name.toLowerCase().includes(value.toLowerCase())
//       );
//       setSuggestions(filteredSuggestions);
//     } else {
//       setSuggestions([]);
//     }

//     onSearch(value);
//   };

//   const handleSuggestionClick = (event) => {
//     setSearchTerm(event.name);
//     setSuggestions([]);
//     onSearch(event.name); // Optional: perform search with selected suggestion
//   };

//   return (
//     <Nav>
//       <Logo>EventSpot Lite</Logo>
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <SearchButton>
//           <FaSearch />
//         </SearchButton>
//         {suggestions.length > 0 && (
//           <Suggestions>
//             {suggestions.map((event) => (
//               <SuggestionItem key={event.id} onClick={() => handleSuggestionClick(event)}>
//                 {event.name}
//               </SuggestionItem>
//             ))}
//           </Suggestions>
//         )}
//       </SearchContainer>
//     </Nav>
//   );
// };

// // Styled Components
// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #282c34;
//   padding: 10px 20px;
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 1000;
// `;

// const Logo = styled.h1`
//   color: white;
//   margin: 0;
//   font-size: 24px;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: auto;
//   position: relative; // Necessary for absolute positioning of suggestions
// `;

// const SearchInput = styled.input`
//   padding: 8px;
//   border: none;
//   border-radius: 4px 0 0 4px;
//   margin-right: -1px;
// `;

// const SearchButton = styled.button`
//   background-color: #61dafb;
//   border: none;
//   border-radius: 0 4px 4px 0;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: #21a1f1;
//   }
// `;

// const Suggestions = styled.div`
//   position: absolute;
//   top: 100%; // Position below the search input
//   left: 0;
//   right: 0;
//   background-color: white;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   z-index: 1000; // Ensure suggestions appear above other elements
// `;

// const SuggestionItem = styled.div`
//   padding: 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// export default Navbar;
import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = ({ onSearch, events }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm(''); // Clear the input after searching
  };

  return (
    <Nav>
      <h1>EventSpot Lite</h1>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by fullname"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </Nav>
  );
};

// Styled Components
// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: #333;
//   color: white;
// `;

// const SearchForm = styled.form`
//   display: flex;
// `;

// const SearchInput = styled.input`
//   padding: 8px;
//   border: none;
//   border-radius: 4px 0 0 4px;
// `;

// const SearchButton = styled.button`
//   padding: 8px;
//   border: none;
//   background-color: #555;
//   color: white;
//   border-radius: 0 4px 4px 0;
//   cursor: pointer;
// `;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #1a202c; /* Dark slate background */
  color: #f7fafc; /* Light grey for text */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SearchInput = styled.input`
  padding: 10px 14px;
  border: 1px solid #4a5568;
  background-color: #2d3748; /* Darker background for input */
  color: #e2e8f0;
  border-radius: 8px 0 0 8px;
  outline: none;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #63b3ed; /* Light blue focus border */
  }
`;

const SearchButton = styled.button`
  padding: 10px 16px;
  border: none;
  background-color: #4a5568; /* Medium grey background */
  color: #f7fafc;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #63b3ed; /* Light blue hover */
  }
  &:active {
    transform: scale(0.97);
    background-color: #4299e1; /* Slightly darker blue on click */
  }
`;


export default Navbar;
