import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header/Header';
import AddItem from './components/Pages/AddItem/AddItem';
import Blogs from './components/Pages/Blogs/Blogs';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import EditProduct from './components/Pages/EditProduct/EditProduct';
import Inventory from './components/Pages/Inventory/Inventory';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import MyItems from './components/Pages/MyItems/MyItems';
import NotFound404 from './components/Shared/NotFound404/NotFound404';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import Login from './components/SignUp/Login/Login';
import SignUp from './components/SignUp/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
        <Route path="/" element={<Dashboard></Dashboard>} ></Route>
        <Route path="/products" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        } ></Route>
        <Route path="/products/:id" element={
          <RequireAuth>
            <EditProduct></EditProduct>
          </RequireAuth>
        } ></Route>

        <Route path="/inventory" element={<Inventory></Inventory>} ></Route>
        <Route path="/manageinventory" element={<ManageInventory></ManageInventory>} ></Route>
        <Route path="/additem" element={<AddItem></AddItem>} ></Route>
        <Route path="/myitems" element={<MyItems></MyItems>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<SignUp></SignUp>} ></Route>
        <Route path="*" element={<NotFound404></NotFound404>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
