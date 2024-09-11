import '../src/styles/global.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import DashBoard from './pages/DashBoard/DashBoard';
import AuthGuard from './components/AuthGuard';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setAuthenticated(true);
      }
      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to dashboard if already logged in */}
        <Route path="/" element={authenticated ? <Navigate to="/dashboard" /> : <LandingPage />} />
        <Route path="/login" element={authenticated ? <Navigate to="/dashboard" /> : <SignIn />} />
        <Route path="/signup" element={authenticated ? <Navigate to="/dashboard" /> : <SignUp />} />
        <Route path="/dashboard" element={<AuthGuard><DashBoard /></AuthGuard>} /> {/* Protected Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
