import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../hookes/useAdmin";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          {/* <!-- Page content here --> */}
          <h2 className="text-2xl font-bold text-red-500">
            Welcome to your Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="dashboard-sidebar" className="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            {!admin && (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/userReview">Add a Review</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard/myprofile">My Profile</Link>
            </li>

            <li>
              <Link to="/dashboard/allorders">Mange Orders</Link>
            </li>

            {admin && (
              <>
                <li>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
                {/* <li>
                  <Link to="/dashboard/payment">Payment</Link>
                </li> */}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
