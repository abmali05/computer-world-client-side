import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold '>Hi {user.displayName}! Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin && <li><Link to="/dashboard/myorders">My Orders</Link></li>}
                    {!admin && <li><Link to="/dashboard/addreview">My Review</Link></li>}

                    {admin && <li><Link to="/dashboard/allusers">All Users</Link></li>}
                    {admin && <li><Link to="/dashboard/addproduct">Add Product</Link></li>}
                    {admin && <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>}
                    {admin && <li><Link to="/dashboard/allorders">Manage All Orders</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;