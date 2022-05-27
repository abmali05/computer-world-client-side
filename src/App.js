import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Dashboard from './Pages/Dashboard/Dashboard';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/Login/RequireAdmin';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import AllOrders from './Pages/Dashboard/AllOrders';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';



function App() {
  return (
    // <div className='page-container'>

    <div className="max-w-7xl mx-auto px-12 page-container">
      <div className='content-wrap'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='/blog' element={<Blog></Blog>} ></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>} ></Route>
          <Route path='/login' element={<Login></Login>} ></Route>
          <Route path='/signup' element={<SignUp></SignUp>} ></Route>

          <Route path='/products/:productId' element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>

          }></Route>




          <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="addreview" element={<AddReview></AddReview>}></Route>
            <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
            <Route path="allusers" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path="manageproduct" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
            <Route path="allorders" element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>

          </Route>


          <Route path='*' element={<NotFound></NotFound>} ></Route>
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
