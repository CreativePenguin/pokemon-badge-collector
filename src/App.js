import './App.css';
import { BrowserRouter, Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import BadgeCase from './BadgeCase';
import NotFound from './NotFound';
import PsychicBadge from './PsychicPage';
import Layout from './Layout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/pokemon-badge-collector" element={<Layout />}>
          {/* <Route path="" element={
            <Routes>
              <Route path="badge-case" element={<BadgeCase />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          } /> */}
          <Route path="" element={<BadgeCase />} />
          <Route path="elgym" element={<PsychicBadge />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
