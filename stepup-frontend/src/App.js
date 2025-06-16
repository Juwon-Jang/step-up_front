import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MentorListPage from './pages/MentorListPage';
import MentoringPage from './pages/MentoringPage';
import ReviewPage from './pages/ReviewPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/mentors" element={<MentorListPage />} />
        <Route path="/mentoring" element={<MentoringPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
