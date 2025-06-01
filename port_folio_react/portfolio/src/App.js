import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Login from './components/Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (credentials) => {
    // Simple authentication - in production, this should be replaced with proper authentication
    if (credentials.username === "admin" && credentials.password === "password") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              <Navigate to="/portfolio" /> : 
              <Login onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            isAuthenticated ? 
              <Portfolio /> : 
              <Navigate to="/login" />
          } 
        />
        <Route path="home" element={<home />}></Route>
        <Route path="/results" element={<results />}></Route>
        <Route path="/hobby" element={<hobbyVideo />}></Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App;