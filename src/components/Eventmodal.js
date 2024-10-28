import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

const EventModal = ({ isOpen, onRequestClose, event }) => {
  if (!event) return null;

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      <ModalContent
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <CloseButton
          whileTap={{ scale: 0.8 }} // Click feedback animation
          onClick={onRequestClose}
        >
          &times;
        </CloseButton>
        <Image src={event.image} alt={event.name} />
        <Details>
          <EventName>{event.name}</EventName>
          <EventDate>{event.date}</EventDate>
          <EventLocation>{event.location}</EventLocation>
          <Description>{event.description}</Description>
        </Details>
      </ModalContent>
    </StyledModal>
  );
};

// Styled Components
const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
`;

const ModalContent = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  padding-top: 60px;
   margin-top: 60px; /* Added margin to push modal down */ 
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  z-index: 2100;

  &:hover {
    color: #333;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Details = styled.div`
  padding: 15px;
  text-align: center;
`;

const EventName = styled.h2`
  font-size: 22px;
  margin: 0;
`;

const EventDate = styled.p`
  font-size: 16px;
  color: #666;
  margin: 5px 0;
`;

const EventLocation = styled.p`
  font-size: 16px;
  color: #333;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
`;

export default EventModal;
