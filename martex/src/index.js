
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
export default function  App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}></Route>      
      <Route path="login"element={<Login/>}></Route>
      <Route path="about"element={<About/>}></Route>
      <Route path="home"element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);