import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AddProduct from './components/Products/AddProduct';
import ViewProduct from './components/Products/ViewProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<ViewProduct></ViewProduct>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
