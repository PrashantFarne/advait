import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './Pages/DataProvider';
import Home from './Pages/Home';
import Empty from './Pages/Empty';

const App = () => {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empty" element={<Empty />} />
        </Routes>
      </DataProvider>
    </Router>
  );
};

export default App;