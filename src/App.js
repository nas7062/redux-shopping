import Detail from './components/Detail/Detail';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import New from './components/New/New';
import Top from './components/Top/Top';
import TopDetail from './components/Top/TopDetail';
import BottomDetail from './components/Bottom/BottomDetail';
import Bottom from './components/Bottom/Bottom';
import Outer from './components/Outer/Outer';
import OuterDetail from './components/Outer/OuterDetail';
import Acc from './components/ACC/Acc';
import AccDetail from './components/ACC/AccDetail';
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/detail/:id' element={<Detail />}/>{/* :id 로 동적으로 페이지 구현가능  */}
          <Route path='/LOGIN' element={<Login />} />
          <Route path='/CART' element={<Cart />} />
          <Route path='/NEW' element={<New />} />
          <Route path='/TOP' element={<Top />} />
          <Route path='/BOTTOM' element={<Bottom />} />
          <Route path='/OUTER' element={<Outer />} />
          <Route path='/ACC' element={<Acc />} />
          <Route path='/acc/:productId' element={<AccDetail />}/>{/* :id 로 동적으로 페이지 구현가능  */}
          <Route path='/outer/:productId' element={<OuterDetail />}/>{/* :id 로 동적으로 페이지 구현가능  */}
          <Route path='/product/:productId' element={<TopDetail />}/>{/* :id 로 동적으로 페이지 구현가능  */}
          <Route path='/bottom/:productId' element={<BottomDetail />}/>{/* :id 로 동적으로 페이지 구현가능  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
