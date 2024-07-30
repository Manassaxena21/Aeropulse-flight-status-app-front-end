import React from 'react';
import { formatDateTime } from './TimeUtils';

function Flights({ flights, onSelectFlight }) {
  return (
    <table className="flight-table">
      <thead>
        <tr>
          <th>Flight ID</th>
          <th>Airline</th>
          <th>Status</th>
          <th>Departure Gate</th>
          <th>Arrival Gate</th>
          <th>Scheduled Departure</th>
          <th>Scheduled Arrival</th>
          <th>Actual Departure</th>
          <th>Actual Arrival</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight.flightId} onClick={() => onSelectFlight(flight)}>
            <td>{flight.flightId}</td>
            <td>{flight.airline}</td>
            <td>{flight.status}</td>
            <td>{flight.departureGate}</td>
            <td>{flight.arrivalGate}</td>
            <td>{formatDateTime(flight.scheduledDeparture)}</td>
            <td>{formatDateTime(flight.scheduledArrival)}</td>
            <td>{flight.actualDeparture}</td>
            <td>{flight.actualArrival}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Flights;