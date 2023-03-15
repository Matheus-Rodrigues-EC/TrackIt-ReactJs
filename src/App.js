import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Habits from "./Components/Habits";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route exact path={`/`} element={<Login/>}/>
      <Route path={`/cadastro`} element={<Cadastro/>}/>
      <Route exact path={`/hoje`} element={<Habits/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
