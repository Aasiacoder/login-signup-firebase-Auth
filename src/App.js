import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
