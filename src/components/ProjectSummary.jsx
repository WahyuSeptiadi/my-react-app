import PropTypes from 'prop-types'

function ProjectSummary({ summary }) {
  return (
    <section className="summary-grid">
      <article className="summary-card">
        <span className="summary-label">Active Projects</span>
        <span className="summary-value">{summary.activeProjectCount}</span>
      </article>
      <article className="summary-card">
        <span className="summary-label">High Projects</span>
        <span className="summary-value">{summary.highProjectCount}</span>
      </article>
      <article className="summary-card">
        <span className="summary-label">Budget</span>
        <span className="summary-value">${summary.totalBudget.toLocaleString()}</span>
      </article>
    </section>
  )
}

ProjectSummary.propTypes = {
  summary: PropTypes.shape({
    totalBudget: PropTypes.number.isRequired,
    activeProjectCount: PropTypes.number.isRequired,
    highProjectCount: PropTypes.number.isRequired,
  }).isRequired,
}

export default ProjectSummary
