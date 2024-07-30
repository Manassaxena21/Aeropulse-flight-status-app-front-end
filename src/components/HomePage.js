// src/components/HomePage.js
import React, { useContext, useEffect, useState } from 'react';
import Flights from './Flights';
import FlightDetails from './FlightDetails';
import { SearchContext } from './SearchContext';
import { MdFlightTakeoff } from 'react-icons/md';
import '../style/HomePage.css';

function HomePage() {
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [flights, setFlights] = useState([]);
    const { searchResults } = useContext(SearchContext);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/flights'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const flightData = await response.json();
                setFlights(flightData);
                console.log(flightData);
            } catch (error) {
                console.error('Failed to fetch flights:', error);
            }
        };
        fetchFlights();
        const interval = setInterval(fetchFlights, 30000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log('searchResults changed:', searchResults); // Log the searchResults
        if (searchResults && Array.isArray(searchResults)) {
            setFlights(searchResults);
        }
    }, [searchResults]);

    const handleApplyChanges = async (updatedFlight) => {
        try {
            const response = await fetch(`http://localhost:8080/api/flights/changeFlight/${encodeURIComponent(updatedFlight.flightId)}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFlight),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const updatedFlights = flights.map(flight =>
                flight.flightId === updatedFlight.flightId ? updatedFlight : flight
            );
            setFlights(updatedFlights);
            return true; // Indicate success
        } catch (error) {
            console.error('Failed to update flight:', error);
            alert(`Error: ${error.message}`);
            return false; // Indicate failure
        }
    };

    const closeModal = () => setSelectedFlight(null);

    const handleSuccess = () => {
        alert('Notification sent successfully');
        closeModal(); // Close modal after success
    };

    return (
        <div className="homepage">
            <div className="card">
                <div className="header">
                    <h2 className="flight-heading"><MdFlightTakeoff className="icon green-icon" size={40} /> Flight Tracker</h2>
                </div>
                <Flights flights={flights} onSelectFlight={setSelectedFlight} />
                {selectedFlight && (
                    <div className="modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={closeModal}>&times;</button>
                            <FlightDetails
                                flight={selectedFlight}
                                onApplyChanges={handleApplyChanges}
                                onSuccess={handleSuccess} // Pass success callback
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;
