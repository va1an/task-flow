import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"
import ProtectedRoutes from "./components/ProtectedRoutes"
import { useAuth } from "./contexts/AuthContext"
import Dashboard from "./pages/Dashboard"
import ResetPassword from "./pages/ResetPassword"
import MainLayout from "./layouts/MainLayout"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Route>
    )
  )

  const { loading } = useAuth();

  if (loading) return <div>Loading</div>
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
