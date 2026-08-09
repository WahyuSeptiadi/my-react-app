import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import CrudPage from './pages/CrudPage.jsx'

function NotFoundPage() {
  return (
    <div className="page-not-found">
      <div className="not-found-card">
        <span className="label-small">Northline</span>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <a className="button button-primary" href="/">Back to homepage</a>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<CrudPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
