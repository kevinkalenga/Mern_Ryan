import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./components/nav/Header";
import {ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RegisterComplete from './pages/auth/RegisterComplete'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
