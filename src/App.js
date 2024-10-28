
// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import EventList from './components/Eventlist';
// import EventModal from './components/Eventmodal';
// import LoadingSpinner from './components/LoadingSpinner';
// import eventsData from './Dataa/eventsData.json';

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   return (
//     <div className="App">
//       <Navbar onSearch={handleSearch} />
//       <main>
//         {isLoading ? (
//           <LoadingSpinner />
//         ) : (
//           <EventList 
//             events={eventsData.filter(event => 
//               event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//               event.location.toLowerCase().includes(searchTerm.toLowerCase())
//             )}
//             onEventClick={openModal} 
//           />
//         )}
//         <EventModal
//           isOpen={isModalOpen}
//           onRequestClose={closeModal}
//           event={selectedEvent}
//         />
//       </main>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import EventList from './components/Eventlist';
// import EventModal from './components/Eventmodal';
// import LoadingSpinner from './components/LoadingSpinner';
// import eventsData from './Dataa/eventsData.json';

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const openModal = (event) => {
//     setSelectedEvent(event);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   return (
//     <div className="App">
//       <Navbar events={eventsData} onSearch={handleSearch} />
//       <main>
//         {isLoading ? (
//           <LoadingSpinner />
//         ) : (
//           <EventList 
//             events={eventsData.filter(event => 
//               event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//               event.location.toLowerCase().includes(searchTerm.toLowerCase())
//             )}
//             onEventClick={openModal} 
//           />
//         )}
//         <EventModal
//           isOpen={isModalOpen}
//           onRequestClose={closeModal}
//           event={selectedEvent}
//         />
//       </main>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/Eventlist';
import EventModal from './components/Eventmodal';
import LoadingSpinner from './components/LoadingSpinner';
import eventsData from './Dataa/eventsData.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleSearch = (term) => {
    const foundEvent = eventsData.find(event =>
      event.name.toLowerCase() === term.toLowerCase()
    );
    if (foundEvent) {
      openModal(foundEvent);
    } else {
      alert('Event not found');
    }
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <main>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <EventList 
            events={eventsData.filter(event => 
              event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              event.location.toLowerCase().includes(searchTerm.toLowerCase())
            )}
            onEventClick={openModal} 
          />
        )}
        <EventModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          event={selectedEvent}
        />
      </main>
    </div>
  );
}

export default App;
