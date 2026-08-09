import PropTypes from 'prop-types'

function formatBudgetValue(budget) {
  if (budget === undefined || budget === null || Number(budget) === 0) {
    return '0'
  }

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(Number(budget))
}

function ProjectForm({ formData, editingId, onChange, onSubmit, onClear }) {
  return (
    <aside className="crud-form-card">
      <div className="section-heading compact">
        <span className="label-small">{editingId !== null ? 'Update Project' : 'Create Project'}</span>
        <h2>{editingId !== null ? 'Edit project' : 'New project'}</h2>
      </div>

      <form className="project-form" onSubmit={onSubmit}>
        <label>
          <span>Project name</span>
          <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="e.g. Growth campaign" />
        </label>

        <label>
          <span>Owner</span>
          <input type="text" name="owner" value={formData.owner} onChange={onChange} placeholder="Team or owner" />
        </label>

        <label>
          <span>Status</span>
          <select name="status" value={formData.status} onChange={onChange}>
            <option value="Active">Active</option>
            <option value="In Progress">In Progress</option>
            <option value="Planning">Planning</option>
            <option value="Completed">Completed</option>
          </select>
        </label>

        <label>
          <span>Priority</span>
          <select name="priority" value={formData.priority} onChange={onChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <label className="budget-label">
          <span>Budget</span>
          <span className="budget-input-wrap">
            <input className="budget-text-input" type="text" name="budget" inputMode="numeric" value={formatBudgetValue(formData.budget)} onChange={(event) => {
              const digits = event.target.value.replace(/\D/g, '')
              onChange({ target: { name: 'budget', value: digits } })
            }} />
          </span>
        </label>

        <div className="form-actions">
          <button className="button button-primary" type="submit">
            {editingId !== null ? 'Save Changes' : 'Add Project'}
          </button>
          <button className="button button-secondary" type="button" onClick={onClear}>
            Clear
          </button>
        </div>
      </form>
    </aside>
  )
}

ProjectForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
  }).isRequired,
  editingId: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

export default ProjectForm
