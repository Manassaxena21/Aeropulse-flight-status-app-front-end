import React,  {useState, useEffect } from 'react';
import { IoIosNotifications } from "react-icons/io";
import Notifications from "./Notifications";
import '../style/NotificationHistory.css'

function NotificationHistory() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/flights/notifications'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const notificationdata = await response.json();
                setNotifications(notificationdata);
                console.log(notificationdata);
            } catch (error) {
                console.error('Failed to fetch flights:', error);
            }
        };
        fetchNotifications();
        const interval = setInterval(fetchNotifications, 30000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="notification-history">
            <div className="notification-card">
                <div className="notif-header">
                    <h2 className="notification-heading"><IoIosNotifications className="icon green-icon" size={40} /> Notifications</h2>
                </div>
                <Notifications notifications={notifications}/>
            </div>
    </div>
  );
}

export default NotificationHistory;