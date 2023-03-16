import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {Login} from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Today from "./Components/Today";
import Habits from "./Components/Habits";

function App() {

  
  const [user, setUser] = useState();
  const [habits, setHabits] = useState();

  return (
    <BrowserRouter>

    <Routes>
      <Route exact path={`/`} element={<Login setUser={setUser}/>}/>
      <Route path={`/cadastro`} element={<Cadastro/>}/>
      <Route path={`/hoje`} element={<Today user={user} habits={habits} setHabits={setHabits} />}/>
      <Route exact path={`/habitos`} element={<Habits/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
