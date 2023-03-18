import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserDataProvider }    from './Providers/UserData';
import { HabitsListProvider }  from './Providers/HabitsList';
import { TodayHabitsProvider } from './Providers/TodayHabits';
import { PercentHabitsProvider } from './Providers/PercentHabits';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserDataProvider>
      <HabitsListProvider>
        <TodayHabitsProvider>
          <PercentHabitsProvider>
            <App />
          </PercentHabitsProvider>
        </TodayHabitsProvider>
      </HabitsListProvider>
    </UserDataProvider>
  </React.StrictMode>
);

