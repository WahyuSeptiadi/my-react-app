const features = [
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and connect your daily operations in one smart workspace.',
    icon: '⚡',
  },
  {
    title: 'Live Analytics',
    description: 'Turn raw data into business insights with real-time dashboards and quick reports.',
    icon: '📊',
  },
  {
    title: 'Customer Intelligence',
    description: 'Understand customer behavior and create better journeys across every channel.',
    icon: '👥',
  },
]

const stats = [
  { label: 'Growth teams', value: '24K+' },
  { label: 'Automation flows', value: '128K' },
  { label: 'Customer satisfaction', value: '98%' },
]

function LandingPage() {
  return (
    <div className="app-shell min-h-screen">
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span></span>
              Growth Intelligence Platform
            </div>
            <h1>Turn your team into a faster, smarter operating system.</h1>
            <p className="hero-text">
              Northline helps modern teams automate decisions, uncover customer signals,
              and deliver more value from every touchpoint.
            </p>

            <div className="hero-cta">
              <a className="button button-primary button-large" href="#">Start free trial</a>
              <a className="button button-secondary button-large" href="#">Watch overview</a>
            </div>

            <div className="trust-row">
              <div>
                <span className="trust-number">32</span>
                <span className="trust-label">Countries</span>
              </div>
              <div>
                <span className="trust-number">150+</span>
                <span className="trust-label">Integration partners</span>
              </div>
              <div>
                <span className="trust-number">4.9</span>
                <span className="trust-label">Customer rating</span>
              </div>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-card dashboard-card">
              <div className="panel-header">
                <div>
                  <span className="label-small">Q3 Performance</span>
                  <h3>Growth Overview</h3>
                </div>
                <span className="status-pill">Live</span>
              </div>

              <div className="chart-area">
                <div className="chart-lines">
                  <span className="line line-one"></span>
                  <span className="line line-two"></span>
                  <span className="line line-three"></span>
                </div>
                <div className="chart-axis">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>
              </div>

              <div className="metric-grid">
                <div>
                  <span className="metric-label">Revenue</span>
                  <span className="metric-value">$126.8k</span>
                  <span className="positive">+12.4%</span>
                </div>
                <div>
                  <span className="metric-label">Active users</span>
                  <span className="metric-value">8,420</span>
                  <span className="positive">+28.2%</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="logo-strip">
          <span>Atlas Labs</span>
          <span>FrameCo</span>
          <span>MonoWorks</span>
          <span>LaunchIQ</span>
          <span>BrightDesk</span>
        </section>

        <section className="section section-features">
          <div className="section-heading centered">
            <span className="label-small">Platform capabilities</span>
            <h2>Everything your growth team needs</h2>
            <p>
              Give every department a shared view of customer activity and operational momentum.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a className="text-link" href="#">Explore feature <span>→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section analytics-section">
          <div className="analytics-image">
            <div className="analytics-card">
              <div className="analytics-card-header">
                <span>Pipeline health</span>
                <span className="status-pill success">Healthy</span>
              </div>
              <div className="large-number">76%</div>
              <div className="mini-bars">
                <span style={{ height: '30px' }}></span>
                <span style={{ height: '54px' }}></span>
                <span style={{ height: '36px' }}></span>
                <span style={{ height: '72px' }}></span>
                <span style={{ height: '45px' }}></span>
                <span style={{ height: '88px' }}></span>
                <span style={{ height: '50px' }}></span>
                <span style={{ height: '95px' }}></span>
              </div>
            </div>
          </div>
          <div className="analytics-copy">
            <span className="label-small">Operations intelligence</span>
            <h2>Monitor your business in real time.</h2>
            <p>
              Align sales, marketing, and success teams around the same signals to prioritize the
              work that accelerates progress.
            </p>
            <ul className="check-list">
              <li>Connect all essential data sources</li>
              <li>Forecast customer and revenue outcomes</li>
              <li>Launch collaborative playbooks faster</li>
            </ul>
            <a className="button button-primary" href="#">See platform tour</a>
          </div>
        </section>

        <section className="section stats-section">
          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section pricing-section">
          <div className="section-heading centered">
            <span className="label-small">Pricing</span>
            <h2>Choose a plan that grows with you</h2>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <h3>Starter</h3>
              <div className="price">$0<span>/month</span></div>
              <p>For individuals exploring a better workflow.</p>
              <ul className="feature-list">
                <li>2 active workspaces</li>
                <li>Core dashboard access</li>
                <li>Community support</li>
              </ul>
              <a className="button button-secondary" href="#">Start for free</a>
            </article>

            <article className="price-card price-card-featured">
              <div className="plan-badge">Popular</div>
              <h3>Growth</h3>
              <div className="price">$49<span>/month</span></div>
              <p>For high-performing teams ready to scale.</p>
              <ul className="feature-list">
                <li>Unlimited workspaces</li>
                <li>Advanced analytics</li>
                <li>Priority integrations</li>
              </ul>
              <a className="button button-primary" href="#">Start 14-day trial</a>
            </article>

            <article className="price-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <p>For complex organizations with custom needs.</p>
              <ul className="feature-list">
                <li>Dedicated success manager</li>
                <li>Security reviews and SSO</li>
                <li>Custom onboarding</li>
              </ul>
              <a className="button button-secondary" href="#">Contact sales</a>
            </article>
          </div>
        </section>

        <section className="cta-section">
          <div>
            <span className="label-small">Northline</span>
            <h2>Turn your operations into your advantage.</h2>
            <p>Bring clarity, automation, and customer insight into one connected platform.</p>
          </div>
          <a className="button button-light" href="#">Book a demo</a>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
