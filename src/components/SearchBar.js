import React, { useState, useContext } from 'react';
import { SearchContext } from './SearchContext';
import '../style/SearchBar.css';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const [flightId, setFlightId] = useState('');
    const { setSearchResults } = useContext(SearchContext);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/flights/${encodeURIComponent(flightId)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setSearchResults(Array.isArray(result) ? result : [result]); // Ensure result is an array
        } catch (error) {
            console.error('Failed to fetch flight data:', error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                value={flightId}
                onChange={(e) => setFlightId(e.target.value)}
                placeholder="Search by Flight ID"
                className="search-input"
            />
            <button type="submit" className="search-button"><FaSearch/></button>
        </form>
    );
};

export default SearchBar;
