import PropTypes from 'prop-types'

function ProjectTable({ projects, onEdit, onDelete, onView, searchTerm, statusFilter, onSearchChange, onFilterChange, loading }) {
  return (
    <section className="table-card">
      <div className="table-header">
        <div>
          <span className="label-small">Portfolio</span>
          <h2>Project List</h2>
        </div>
        <span className="table-count">{projects.length} items</span>
      </div>

      <div className="filter-bar">
        <label className="search-field">
          <span>Search</span>
          <input type="text" value={searchTerm} onChange={onSearchChange} placeholder="Search name or owner" />
        </label>

        <label className="filter-field">
          <span>Status</span>
          <select value={statusFilter} onChange={onFilterChange}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="In Progress">In Progress</option>
            <option value="Planning">Planning</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
      </div>

      {loading && (
        <div className="loading-row">Loading projects...</div>
      )}

      <table className="project-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Budget</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td><strong>{project.name}</strong></td>
              <td>{project.owner}</td>
              <td><span className="badge badge-status">{project.status}</span></td>
              <td><span className="badge badge-priority priority-high">{project.priority}</span></td>
              <td>${project.budget.toLocaleString()}</td>
              <td className="actions">
                <button className="icon-button" type="button" aria-label={`View ${project.name}`} title="View" onClick={() => onView(project)}>
                  <span aria-hidden="true">👁</span>
                </button>
                <button className="icon-button" type="button" aria-label={`Edit ${project.name}`} title="Edit" onClick={() => onEdit(project)}>
                  <span aria-hidden="true">✎</span>
                </button>
                <button className="icon-button danger" type="button" aria-label={`Delete ${project.name}`} title="Delete" onClick={() => onDelete(project.id)}>
                  <span aria-hidden="true">🗑</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!loading && projects.length === 0 && (
        <div className="empty-state">No matching projects found.</div>
      )}
    </section>
  )
}

ProjectTable.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      budget: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  statusFilter: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

export default ProjectTable
