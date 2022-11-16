import {Route, Routes} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import { ProtectedRoute } from './auth/ProtectedRoute';
import React from 'react';

function App() {
  return (
   <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
   </Routes>
  );
}

export default App;
