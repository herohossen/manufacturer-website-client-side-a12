import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
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
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addareview">Add a Review</Link>
            </li>
            <li>
              <Link to="/dashboard/myprofile">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/allorders">All Orders</Link>
            </li>
            
            {/* { admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                    </>} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
