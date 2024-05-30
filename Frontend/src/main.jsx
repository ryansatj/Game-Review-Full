import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from './pages/Loginpage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AboutUs from './pages/AboutUsPage.jsx';
import MainPage from './pages/MainPage.jsx';
import AboutUsLog from './pages/AboutUsLogPage.jsx';
import CreateReviewPage from './pages/CreateReviewPage.jsx';
import EditPage from './pages/EditPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Loginpage/>,
  },
  {
    path: "signup",
    element: <SignupPage/>
  },
  {
    path: "about",
    element: <AboutUs/>
  },
  {
    path: "games",
    element: <MainPage/>
  },
  {
    path: "aboutus",
    element: <AboutUsLog/>
  },
  {
    path: "create",
    element: <CreateReviewPage/>
  },
  {
    path: "edit/:id",
    element: <EditPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);