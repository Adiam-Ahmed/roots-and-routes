import '../src/styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import DashBoard from './pages/DashBoard/DashBoard';
import AuthGuard from './components/AuthGuard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<AuthGuard><DashBoard /></AuthGuard>} /> {/* Protected Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
