import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="topbar">
        <NavLink className="brand" to="/">
          <span className="brand-icon">N</span>
          <span>Northline</span>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end>Platform</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <a href="#">Solutions</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </nav>

        <div className="nav-actions">
          <a className="login-link" href="#">Log in</a>
          <NavLink className="button button-primary" to="/dashboard">Get started</NavLink>
        </div>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer-brand">
          <NavLink className="brand" to="/">
            <span className="brand-icon">N</span>
            <span>Northline</span>
          </NavLink>
          <p>Growth intelligence for fast-moving teams.</p>
        </div>
        <div className="footer-links">
          <a href="#">Platform</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Security</a>
          <a href="#">Support</a>
        </div>
        <div className="footer-copy">© 2026 Northline. All rights reserved.</div>
      </footer>
    </>
  )
}

export default Layout
