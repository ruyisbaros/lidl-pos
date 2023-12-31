import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Orders from "./pages/Orders";
import Posts from "./pages/Posts";
import Bills from "./pages/Bills";
import Notes from "./pages/Notes";
import Forms from "./pages/Forms";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="app">
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
