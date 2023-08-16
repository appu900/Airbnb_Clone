import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Wishlistpage from './pages/Wishlistpage';
import Reserve from './pages/Reserve';
import Photopage from './pages/Photopage';
import Map from './pages/Map';
import LoadingBar from 'react-top-loading-bar'
import Payment from './pages/Payment';

function App() {
  return (
    <div className="App">
        <LoadingBar
        color='#f11946'
        progress={100}
        
      />
       <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/wishlist' element={<Wishlistpage/>}/>
        <Route path='reserve' element={<Reserve/>}/>
        <Route path='/photos' element={<Photopage/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/payment' element={<Payment/>}/>
       </Routes>
    </div>
  );
}

export default App;
