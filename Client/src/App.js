import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import LoginComponent from "./components/Auth/login/Login";
import RegisterComponent from "./components/Auth/Signup/Signup";

//getting errror: You cannot render a <Router> inside another <Router>. You should never have more than one in your app.
//Solution: Remove the BrowserRouter from the App.js file and wrap the App component with the BrowserRouter in the index.js file.

function App() {
  return (
    <AppContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<RegisterComponent />} />
      </Routes>
      <Newsletter />
      <Footer />
    </AppContext>
  );
}

export default App;
