import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import FIRForm from './pages/FIRForm';
import FIRList from './pages/FIRList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);  // Set authentication state to true
  const handleLogout = () => setIsAuthenticated(false);  // Reset authentication on logout

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/register-fir"
          element={isAuthenticated ? <FIRForm /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/view-firs"
          element={isAuthenticated ? <FIRList /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login handleLogin={handleLogin} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
