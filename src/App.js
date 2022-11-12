import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import BadgeCase from './BadgeCase';
import NotFound from './NotFound';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="" element={
            <Routes>
              <Route path="badge-case" element={<BadgeCase />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          } /> */}
          <Route path="/badge-case" element={<BadgeCase />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
