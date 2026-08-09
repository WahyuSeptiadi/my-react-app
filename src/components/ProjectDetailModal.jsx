import PropTypes from 'prop-types'

function ProjectDetailModal({ project, onClose }) {
  if (!project) {
    return null
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-card detail-modal">
        <div className="modal-header">
          <div>
            <span className="label-small">Project Detail</span>
            <h2>{project.name}</h2>
          </div>
        </div>

        <div className="detail-grid">
          <article>
            <span className="detail-label">Owner</span>
            <span className="detail-value">{project.owner}</span>
          </article>
          <article>
            <span className="detail-label">Status</span>
            <span className="detail-value">{project.status}</span>
          </article>
          <article>
            <span className="detail-label">Priority</span>
            <span className="detail-value">{project.priority}</span>
          </article>
          <article>
            <span className="detail-label">Budget</span>
            <span className="detail-value">${Number(project.budget).toLocaleString()}</span>
          </article>
        </div>

        <div className="modal-actions">
          <button className="button button-secondary" type="button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

ProjectDetailModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.string,
    status: PropTypes.string,
    priority: PropTypes.string,
    budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onClose: PropTypes.func.isRequired,
}

export default ProjectDetailModal
