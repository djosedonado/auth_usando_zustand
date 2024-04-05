import LoginPages from "./pages/LoginPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePages from "./pages/ProfilePages";
import RegisterPages from "./pages/RegisterPages";
import HomePages from "./pages/HomePages";
import Navegations from "./components/Navegations";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuthStore } from "./store/auth";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <BrowserRouter>
      <Navegations />
      <Routes>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/" element={<HomePages />} />
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path="/profile" element={<ProfilePages />} />
          <Route path="/dashboard" element={<ProfilePages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
