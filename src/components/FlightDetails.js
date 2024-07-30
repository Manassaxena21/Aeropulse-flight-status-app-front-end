import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

function FlightDetails({ flight, onApplyChanges, onSuccess }) {
  const [status, setStatus] = useState(flight.status);
  const [departureGate, setDepartureGate] = useState(flight.departureGate);
  const [arrivalGate, setArrivalGate] = useState(flight.arrivalGate);

  const parseDate = (dateString) => {
    if (!dateString) {
      console.error('Date string is empty or undefined');
      return new Date(); // Return current date or a default date
    }

    const date = moment(dateString, moment.ISO_8601, true);

    if (!date.isValid()) {
      console.error('Invalid date:', dateString);
      return new Date(); // Return current date or a default date
    }

    return date.toDate();
  };

  const [scheduledDeparture, setScheduledDeparture] = useState(parseDate(flight.scheduledDeparture));
  const [scheduledArrival, setScheduledArrival] = useState(parseDate(flight.scheduledArrival));

  useEffect(() => {
    if (flight) {
      setStatus(flight.status);
      setDepartureGate(flight.departureGate);
      setArrivalGate(flight.arrivalGate);
      setScheduledDeparture(parseDate(flight.scheduledDeparture));
      setScheduledArrival(parseDate(flight.scheduledArrival));
    }
  }, [flight]);

  const handleApplyChanges = async () => {
    if (!departureGate || !arrivalGate || scheduledArrival<=scheduledDeparture) {
      alert('Invalid Input');
      return;
    }
    const updatedFlight = {
      ...flight,
      status,
      departureGate: departureGate,
      arrivalGate: arrivalGate,
      scheduledDeparture: moment(scheduledDeparture).toISOString(),
      scheduledArrival: moment(scheduledArrival).toISOString(),
    };
    try {
      await onApplyChanges(updatedFlight);
      if (onSuccess) onSuccess(); // Call success callback
    } catch (error) {
      console.error('Failed to apply changes:', error);
    }
  };

  return (
    <div className="flight-details">
      <h2>Flight: {flight.flightId}</h2>
      <p>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="On Time">On Time</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </p>
      <p>
        Departure Gate:
        <input
          type="text"
          value={departureGate}
          onChange={(e) => setDepartureGate(e.target.value)}
          disabled={status === 'Cancelled'}
        />
      </p>
      <p>
        Arrival Gate:
        <input
          type="text"
          value={arrivalGate}
          onChange={(e) => setArrivalGate(e.target.value)}
          disabled={status === 'Cancelled'}
        />
      </p>
      <p>
        Scheduled Departure:
        <DatePicker
          selected={scheduledDeparture}
          onChange={(date) => setScheduledDeparture(date)}
          disabled={status === 'Cancelled'}
          showTimeSelect
          dateFormat="dd-MM-yy HH:mm"
        />
      </p>
      <p>
        Scheduled Arrival:
        <DatePicker
          selected={scheduledArrival}
          onChange={(date) => setScheduledArrival(date)}
          disabled={status === 'Cancelled'}
          showTimeSelect
          dateFormat="dd-MM-yy HH:mm"
        />
      </p>
      <button
        className="apply-button"
        style={{ backgroundColor: 'green', color: 'white' }}
        onClick={handleApplyChanges}
      >
        Apply
      </button>
    </div>
  );
}

export default FlightDetails;
