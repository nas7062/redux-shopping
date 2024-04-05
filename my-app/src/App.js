
import './App.css';
import Detail from './components/Detail/Detail';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import New from './components/New/New';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/detail/:id' element={<Detail />} ></Route>
          <Route path='/LOGIN' element={<Login />} ></Route>
          <Route path='/CART' element={<Cart />} ></Route>
          <Route path='/NEW' element={<New />} ></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
