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
        <Route path="jimat_ui_front/signup" element={<SignUp/>}/>
        <Route path="jimat_ui_front/dashboard" element={<Dashboard/>}/>
        <Route path="jimat_ui_front/users" element={<Users/>}/>
        <Route path="jimat_ui_front/users/add" element={<AddUser/>}/>
        <Route path="jimat_ui_front/users/edit/:id" element={<EditUser/>}/>
        <Route path="jimat_ui_front/interests" element={<Interests/>}/>
        <Route path="jimat_ui_front/interests/add" element={<AddInterest/>}/>
        <Route path="jimat_ui_front/interests/edit/:id" element={<EditInterest/>}/>
        <Route path="jimat_ui_front/interests/mbkm/:id" element={<ProfilMbkm/>}/>
        <Route path="jimat_ui_front/interests/minat/:id" element={<ProfilMinat/>}/>
        <Route path="jimat_ui_front/formq" element={<AddQ/>}/>

      </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;
