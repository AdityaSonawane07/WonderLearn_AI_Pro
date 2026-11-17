import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Import Pages using the exact capital 'Pages' folder name
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Dashboard from './Pages/dashboard/Dashboard';
import Mathematics from './Pages/mathematics/mathematics';
import Science from './Pages/science/science';
import History from './Pages/history/History';
import Games from './Pages/games/Games';
import Quiz from './Pages/quiz/Quiz';
import AITutor from "./Pages/ai-tutor/ai-tutor.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Gamified App Routes wrapped in MainLayout */}
        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mathematics" element={<Mathematics />} />
          <Route path="/science" element={<Science />} />
          <Route path="/history" element={<History />} />
          <Route path="/games" element={<Games />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/ai-tutor" element={<AITutor />} />
        </Route>

        {/* Catch-all fallback redirecting to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;