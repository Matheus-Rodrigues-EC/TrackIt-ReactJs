import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserDataProvider }  from './Providers/UserData';
import { HabitsListProvider } from './Providers/HabitsList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserDataProvider>
      <HabitsListProvider>
        <App />
      </HabitsListProvider>
    </UserDataProvider>
  </React.StrictMode>
);

