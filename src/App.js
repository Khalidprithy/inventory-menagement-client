import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header/Header';
import Overview from './components/Overview/Overview';
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
        <Route path="/" element={<Dashboard></Dashboard>} ></Route>
        <Route path="/products" element={<Products></Products>} ></Route>
        <Route path="/overview" element={<Overview></Overview>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<SignUp></SignUp>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
