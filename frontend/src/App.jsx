import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navigation/Navbar";
import Authenticate from "./pages/Authenticate";
import Activate from "./pages/Activate";
import Rooms from "./pages/Rooms";
import { useSelector } from "react-redux";

// const isAuth = false;
// const user = {
//   activated: false,
// };

function App() {
  return (
    <>
      <div className="px-30">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <GuestRoute>
                  <Home />
                </GuestRoute>
              }
            />

            <Route
              path="/authenticate"
              element={
                <GuestRoute>
                  <Authenticate />
                </GuestRoute>
              }
            />

            <Route
              path="/activate"
              element={
                <SemiProtectedRoute>
                  <Activate />
                </SemiProtectedRoute>
              }
            />

            <Route
              path="/rooms"
              element={
                <ProtectedRoute>
                  <Rooms />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

const GuestRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  if (isAuth) {
    return <Navigate to={"/rooms"} state={{ from: location }} />;
  }
  return children;
};

const SemiProtectedRoute = ({ children }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to={"/"} state={{ from: location }} />;
  }
  if (isAuth && !user.activated) {
    return children;
  }
  return <Navigate to={"/rooms"} state={{ from: location }} />;
};

const ProtectedRoute = ({ children }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to={"/"} state={{ from: location }} />;
  }
  if (isAuth && !user.activated) {
    return <Navigate to={"/activate"} state={{ from: location }} />;
  }
  return children;
};

export default App;
