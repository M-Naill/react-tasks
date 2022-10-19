import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/navbar';
import About from './Components/about/about';
import Home from './Components/home';
import Shop from './Components/shop';
import Details from './Components/shop/details';
import Counter from './Components/counter';
import Cart from './Components/cart';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='shop/:id' element={<Details />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>


    </BrowserRouter >
  );
}

export default App;
