import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import AuthProvider from "./components/Auth/Authprovider/AuthProvider";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

//getting errror: You cannot render a <Router> inside another <Router>. You should never have more than one in your app.
//Solution: Remove the BrowserRouter from the App.js file and wrap the App component with the BrowserRouter in the index.js file.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
