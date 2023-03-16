import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Today from "./Components/Today";
import Habits from "./Components/Habits";
import Teste from "./Components/Historic";

function App() {

  return (
    <BrowserRouter>

    <Routes>
      <Route exact path={`/`} element={<Login />}/>
      <Route path={`/cadastro`} element={<Cadastro />}/>
      <Route path={`/hoje`} element={<Today  />}/>
      <Route path={`/habitos`} element={<Habits />}/>
      <Route path={`/historico`} element={<Teste />}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
