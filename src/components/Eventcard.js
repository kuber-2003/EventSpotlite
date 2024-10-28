// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const EventCard = ({ event, onClick }) => {
//   return (
//     <Card onClick={() => onClick(event)}>
//       <Image src={event.image} alt={event.name} />
//       <Details>
//         <EventName>{event.name}</EventName>
//         <EventDate>{event.date}</EventDate>
//         <EventLocation>{event.location}</EventLocation>
//       </Details>
//     </Card>
//   );
// };

// // Styled components
// const Card = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   cursor: pointer;
//   background-color: #fff;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 150px;
//   object-fit: cover;
// `;

// const Details = styled.div`
//   padding: 15px;
// `;

// const EventName = styled.h3`
//   font-size: 18px;
//   font-weight: bold;
//   margin: 0;
// `;

// const EventDate = styled.p`
//   font-size: 14px;
//   color: #666;
//   margin: 5px 0;
// `;

// const EventLocation = styled.p`
//   font-size: 14px;
//   color: #333;
// `;

// export default EventCard;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EventCard = ({ event, onClick }) => {
  return (
    <Card
      onClick={() => onClick(event)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image src={event.image} alt={event.name} />
      <Details>
        <EventName>{event.name}</EventName>
        <EventDate>{event.date}</EventDate>
        <EventLocation>{event.location}</EventLocation>
      </Details>
    </Card>
  );
};

// Styled components
const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
   transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const Details = styled.div`
  padding: 20px;
   text-align: center;
  background-color: #f8f9fa;
`;

const EventName = styled.h3`
  font-size: 20px;
   font-weight: bold;
  color: #333;
  

`;

const EventDate = styled.p`
  font-size: 14px;
  color: #666;
 
`;

const EventLocation = styled.p`
  font-size: 14px;
  color: #333;
`;

export default EventCard;
