import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './Pages/DataProvider';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DataProvider>
    </Router>
  );
};

export default App;