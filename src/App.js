import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Users from "./pages/Users";
import Interests from "./pages/Interests";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddInterest from "./pages/AddInterest";
import EditInterest from "./pages/EditIntetest";
import AddQ from "./pages/AddQ";
import ProfilMbkm from "./pages/ProfilMbkm";
import ProfilMinat from "./pages/ProfilMinat";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/jimat_ui_front" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/add" element={<AddUser/>}/>
        <Route path="/users/edit/:id" element={<EditUser/>}/>
        <Route path="/interests" element={<Interests/>}/>
        <Route path="/interests/add" element={<AddInterest/>}/>
        <Route path="/interests/edit/:id" element={<EditInterest/>}/>
        <Route path="/interests/mbkm/:id" element={<ProfilMbkm/>}/>
        <Route path="/interests/minat/:id" element={<ProfilMinat/>}/>
        <Route path="/formq" element={<AddQ/>}/>

      </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;
