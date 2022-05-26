import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Login/RequireAuth";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddAReview from "./Pages/Dashboard/AddAReview";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import AllOrders from "./Pages/Dashboard/AllOrders";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="purchase/:toolId"
          element={
            // <RequireAuth>
            <Purchase />
            // </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="addareview" element={<AddAReview />} />

          <Route path="allorders" element={<AllOrders />} />
          {/* Admin Panel */}
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>} />
        </Route>
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
