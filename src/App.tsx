import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solucoes" element={<SolutionsPage />} />
        <Route path="/solucoes/:slug" element={<SolutionDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
