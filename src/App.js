import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route exact path={`/`} element={<Login/>}/>
      <Route path={`/cadastro`} element={<Cadastro/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
