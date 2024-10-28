import React, { useState } from 'react';
import styled from 'styled-components';
import eventsData from '../Dataa/eventsData.json';
import EventCard from './Eventcard';
import EventModal from './Eventmodal';

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on search term (by name or location)
  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <Container>
      <SearchBar
        type="text"
        placeholder="Search by name or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <EventsContainer>
        {filteredEvents.map(event => (
            
          <EventCard key={event.id} event={event} onClick={openModal} />
        ))}
      </EventsContainer>
      {/* Render Modal if an event is selected */}
      {selectedEvent && (
        <EventModal
          isOpen={!!selectedEvent}
          onRequestClose={closeModal}
          event={selectedEvent}
        />
      )}
    </Container>
  );
};

// Styled Components (same as before)
const Container = styled.div`
  padding: 80px 20px; /* Added padding for the fixed navbar */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #f0f4f7, #e0e6ea);
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const EventsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  width: 100%;
  padding-top: 20px;
`;

export default EventList;
