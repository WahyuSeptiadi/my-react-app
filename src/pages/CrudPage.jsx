import { useEffect, useMemo, useState } from 'react'
import { createProject, deleteProject, getProjects, updateProject } from '../api/projectsApi.js'
import ProjectDetailModal from '../components/ProjectDetailModal.jsx'
import ProjectForm from '../components/ProjectForm.jsx'
import ProjectSummary from '../components/ProjectSummary.jsx'
import ProjectTable from '../components/ProjectTable.jsx'
import Toast from '../components/Toast.jsx'

function CrudPage() {
  const [projects, setProjects] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [toast, setToast] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    priority: 'Medium',
    status: 'Active',
    budget: 0,
  })

  useEffect(() => {
    async function loadProjects() {
      setIsLoading(true)

      try {
        const allProjects = await getProjects()
        setProjects(allProjects)
      } finally {
        setIsLoading(false)
      }
    }

    loadProjects()
  }, [])

  const summary = useMemo(() => {
    return {
      totalBudget: projects.reduce((acc, project) => acc + Number(project.budget), 0),
      activeProjectCount: projects.filter((project) => project.status !== 'Completed').length,
      highProjectCount: projects.filter((project) => project.priority === 'High').length,
    }
  }, [projects])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const normalizedSearch = searchTerm.trim().toLowerCase()
      const matchesSearch = !normalizedSearch
        || project.name.toLowerCase().includes(normalizedSearch)
        || project.owner.toLowerCase().includes(normalizedSearch)

      const matchesStatus = statusFilter === 'All' || project.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [projects, searchTerm, statusFilter])

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'budget') {
      const digits = value.replace(/\D/g, '')

      setFormData((current) => ({
        ...current,
        budget: digits === '' ? 0 : Number(digits),
      }))

      return
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setFormData({ name: '', owner: '', priority: 'Medium', status: 'Active', budget: 0 })
    setEditingId(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.owner.trim()) {
      setToast({ type: 'danger', message: 'Project name and owner are required.' })
      return
    }

    if (editingId !== null) {
      const updatedProject = await updateProject(editingId, formData)

      setProjects((current) => current.map((project) => project.id === editingId ? updatedProject : project))
      setToast({ type: 'success', message: 'Project updated.' })
    } else {
      const nextProject = await createProject(formData)

      setProjects((current) => [...current, nextProject])
      setToast({ type: 'success', message: 'Project created.' })
    }

    resetForm()
  }

  const handleEdit = (project) => {
    setEditingId(project.id)
    setFormData({
      name: project.name,
      owner: project.owner,
      priority: project.priority,
      status: project.status,
      budget: project.budget,
    })
  }

  const handleDelete = async (id) => {
    await deleteProject(id)

    setProjects((current) => current.filter((project) => project.id !== id))

    if (editingId === id) {
      resetForm()
    }

    setToast({ type: 'success', message: 'Project deleted.' })
  }

  return (
    <div className="crud-page">
      <section className="page-title-row">
        <div>
          <span className="label-small">Operations Console</span>
          <h1>Project Workspace</h1>
        </div>
        <button className="button button-primary" type="button" onClick={resetForm}>Create project</button>
      </section>

      <ProjectSummary summary={summary} />

      <section className="crud-layout">
        <ProjectForm
          formData={formData}
          editingId={editingId}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClear={resetForm}
        />

        <ProjectTable
          projects={filteredProjects}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={(project) => setSelectedProject(project)}
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          onSearchChange={(event) => setSearchTerm(event.target.value)}
          onFilterChange={(event) => setStatusFilter(event.target.value)}
          loading={isLoading}
        />
      </section>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </div>
  )
}

export default CrudPage
