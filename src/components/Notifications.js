import React from 'react';
import { formatDateTime } from './TimeUtils';

function Notifications({ notifications}) {
  return (
    <table className="notification-table">
      <thead>
        <tr>
            <th>Sno</th>
            <th>Flight Id</th>
            <th>Message</th>
            <th>TimeStamp</th>
        </tr>
      </thead>
      <tbody>
        {notifications.map((notifcation) => (
          <tr key={notifcation.flightId}>
            <td>{notifcation.notificationId}</td>
            <td>{notifcation.flightId}</td>
            <td>{notifcation.message}</td>
            <td>{formatDateTime(notifcation.timestamp)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Notifications;