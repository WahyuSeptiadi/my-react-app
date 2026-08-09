import PropTypes from 'prop-types'

function Toast({ message, type, onClose }) {
  return (
    <div className="toast-stack">
      <div className={`toast toast-${type}`}> 
        <span className="toast-icon">{type === 'success' ? '✓' : '!'}</span>
        <span>{message}</span>
        <button className="toast-close" type="button" onClick={onClose}>×</button>
      </div>
    </div>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'danger', 'info']).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Toast
