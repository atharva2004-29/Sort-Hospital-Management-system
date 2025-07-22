import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import RiskPrediction from './pages/RiskPrediction';
import OperationsDashboard from './pages/OperationsDashboard';
import ResearchInterface from './pages/ResearchInterface';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<RiskPrediction />} />
          <Route path="/operations" element={<OperationsDashboard />} />
          <Route path="/research" element={<ResearchInterface />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;