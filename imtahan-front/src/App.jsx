import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainlayout from './layout/Mainlayout';
import Home from './pages/Home';
import "./assets/reset.scss"
import Detail from './pages/Detail';
import Add from './pages/Add';
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
          
          </Route> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
