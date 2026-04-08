import React from 'react';
import './App.css';

interface AppProps {
  username?: string;
  isAuthenticated?: boolean;
  pageTitle?: string;
}

const App: React.FC<AppProps> = ({
  username,
  isAuthenticated = false,
  pageTitle = "My React App",
}) => {
  return (
    <div className="react-app">
      <h1>{pageTitle}</h1>
      
      {isAuthenticated ? (
        <p>Welcome, <strong>{username || 'User'}</strong>!</p>
      ) : (
        <p>Please log in</p>
      )}

      <hr />
      <p><strong>React is now successfully mounted!</strong></p>
    </div>
  );
};

export default App;