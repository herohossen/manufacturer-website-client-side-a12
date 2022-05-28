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
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import AllOrders from "./Pages/Dashboard/AllOrders";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Payment from "./Pages/Dashboard/Payment";
import UserReview from "./Pages/Dashboard/UserReview";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/Shared/NotFound";
import Footer from "./Pages/Shared/Footer";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route
          path="purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
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
          <Route
            index
            element={
              <RequireAuth>
                <MyOrders />
              </RequireAuth>
            }
          />
          <Route
            path="myprofile"
            element={
              <RequireAuth>
                <MyProfile />
              </RequireAuth>
            }
          />
          <Route
            path="userReview"
            element={
              <RequireAuth>
                <UserReview />
              </RequireAuth>
            }
          />
          {/* <Route path="myprofile" element={<RequireAuth><MyProfile /></RequireAuth>} /> */}
          {/* <Route path="myprofile" element={<MyProfile />} /> */}
          {/* <Route path="addareview" element={<AddAReview />} /> */}
          <Route path="allorders" element={<AllOrders />} />
          <Route path="payment/:id" element={<Payment />} />
          {/* Admin Panel */}
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
