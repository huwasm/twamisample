import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Library from './pages/Library';
import Courses from './pages/Courses';
import Quests from './pages/Quests';
import Reading from './pages/Reading';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Payments from './pages/Payments';
import Subscription from './pages/Subscription';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main tabs with Bottom Navigation */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Full screen pages */}
        <Route path="/reading/:id" element={<Reading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </Router>
  );
};

export default App;