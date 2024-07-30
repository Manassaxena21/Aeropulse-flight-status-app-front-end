# Flight Status Updates Frontend

This project is the frontend part of a full-stack application providing real-time flight status updates and notifications to staff and passengers. The application is built using React.js and styled with CSS.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **CSS**: Cascading Style Sheets for styling the application.
- **Axios**: A promise-based HTTP client for the browser and Node.js to make API requests.
- **React Context API**: For state management to handle search functionality and flight data.
- **Node.js**: JavaScript runtime for running the development server.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).
- **npm**: Node package manager, which comes with Node.js.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/flight-status-updates-frontend.git
   cd flight-status-updates-frontend

Project Structure
-      src/components: Contains the React components for the application.
-  HomePage.js: The main component that fetches and displays all flight information.
-  SearchBar.js: The component for the search bar functionality.
-  Flights.js: The component that displays the flight information in a table.
-  FlightDetails.js: The component for viewing and editing flight details.
-  NotificationHistory.js: The component for displaying the notification history.
-      src/context: Contains the context for managing the global state.
-  SearchContext.js: Context for managing search results and search state.
  -      src/App.js: The main component that sets up the application.
-       src/index.js: The entry point for the React application.
-      src/App.css: Contains global styles for the application.
-      src/index.css: Contains base styles for the application.

Please check the PPT added as well for the update on whole project - Flight tracking App.pptx
