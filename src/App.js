import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header/Header';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Products from './components/Pages/Products/Products';
import Login from './components/SignUp/Login/Login';
import SignUp from './components/SignUp/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
        <Route path="/products" element={<Products></Products>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<SignUp></SignUp>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
