import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { AppLayout } from "./Layouts/AppLayout";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import "./pages/signup.css";
import { ErrorPage } from "./components/ErrorPage";
import NearbyHospitals from "./pages/NearbyHospital";
import { HospitalDetails } from "./pages/HospitalDetails";
import { Profile } from "./UI/Profile";
import { PrivateRoute } from "./Layouts/PrivateRoute";
import { PublicRoute } from "./Layouts/PublicRoute";
import { OAuthSuccess } from "./context/oauth-google";
import { HospitalRoute } from "./Layouts/HospitalRoute";

const router = createBrowserRouter([

  //Public Route ->accessible to all the user
  {
    element: <PublicRoute />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },

    ]
  },

  //Private Route ->accessible only to the authorized user
  {
    element: <PrivateRoute />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "/profile",
        element: <Profile />,

      }
    ]

  },
  {
    element: <HospitalRoute />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "/nearHospital",
        element: <NearbyHospitals />
      },
      {
        path: "/hospital/:id",
        element: <HospitalDetails />
      },
    ]
  },
  {
    path: "/oauth-google",
    element: <OAuthSuccess />

  },

  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },

    ],
  }
])


const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}
export default App;