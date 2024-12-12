import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import Layout from './Components/Layout.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [{
      path: "/",
      element: <App />,
      loader: () => fetch('http://localhost:5000/coffee')
    },
    {
      path: "addCoffee",
      element: <AddCoffee />
    },
    {
      path: "updateCoffee/:id",
      element: <UpdateCoffee />,
      loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
    },
    {
      path: "signIn",
      element: <SignIn />
    },
    {
      path: "signUp",
      element: <SignUp />
    },
    {
      path: "users",
      element: <Users />,
      loader: () => fetch('http://localhost:5000/users')
    }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
