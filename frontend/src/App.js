import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./components/nav/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
