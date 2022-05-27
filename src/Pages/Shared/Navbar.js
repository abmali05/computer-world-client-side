import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('tokenAccess');
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li> <Link to={"/home"}>Home</Link> </li>
                        <li> <Link to={"/blog"}>Blog</Link> </li>
                        <li> <Link to={"/portfolio"}>Portfolio</Link> </li>

                        {
                            user && <li><Link to="/dashboard">Dashboard</Link></li>
                        }
                        <li>{user ? <Link to={"/"} onClick={logout} >Log Out</Link> : <Link to="/login">Login</Link>}</li>
                        <li>   {
                            user && <li>{user.displayName}</li>

                        }
                        </li>
                        <li>   {
                            user && <li>{user.email}</li>

                        }
                        </li>



                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Computer World</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    <li> <Link to={"/home"}>Home</Link> </li>
                    <li> <Link to={"/blog"}>Blog</Link> </li>
                    <li> <Link to={"/portfolio"}>Portfolio</Link> </li>
                    {
                        user && <li><Link to="/dashboard">Dashboard</Link></li>
                    }
                    <li>{user ? <Link to={"/"} onClick={logout} >Log Out</Link> : <Link to="/login">Login</Link>}</li>
                    <li>   {
                        user && <li>{user.displayName}</li>

                    }
                    </li>
                    <li>   {
                        user && <li>{user.email}</li>

                    }
                    </li>
                </ul>

            </div>

            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div >
    );
};

export default Navbar;