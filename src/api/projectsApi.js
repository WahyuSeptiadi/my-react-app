const storageKey = 'northline.projects'

const defaultProjects = [
  { id: 1, name: 'Website Revamp', owner: 'Marketing Team', status: 'In Progress', priority: 'High', budget: 4200 },
  { id: 2, name: 'Customer Insights', owner: 'Research Team', status: 'Active', priority: 'Medium', budget: 2800 },
  { id: 3, name: 'Ops Automation', owner: 'Operations Team', status: 'Planning', priority: 'High', budget: 3600 },
]

async function delay() {
  await new Promise((resolve) => {
    setTimeout(resolve, 120)
  })
}

function readProjectsFromStorage() {
  const rawProjects = localStorage.getItem(storageKey)

  if (!rawProjects) {
    localStorage.setItem(storageKey, JSON.stringify(defaultProjects))
    return defaultProjects
  }

  try {
    const parsedProjects = JSON.parse(rawProjects)

    if (!Array.isArray(parsedProjects)) {
      return defaultProjects
    }

    return parsedProjects
  } catch {
    return defaultProjects
  }
}

export async function getProjects() {
  await delay()

  return readProjectsFromStorage()
}

export async function createProject(payload) {
  await delay()

  const projects = readProjectsFromStorage()
  const nextProject = {
    ...payload,
    id: Date.now(),
  }

  const nextProjects = [...projects, nextProject]
  localStorage.setItem(storageKey, JSON.stringify(nextProjects))

  return nextProject
}

export async function updateProject(id, payload) {
  await delay()

  const projects = readProjectsFromStorage()
  const nextProjects = projects.map((project) => project.id === id ? { ...project, ...payload } : project)

  localStorage.setItem(storageKey, JSON.stringify(nextProjects))

  return nextProjects.find((project) => project.id === id)
}

export async function deleteProject(id) {
  await delay()

  const projects = readProjectsFromStorage()
  const nextProjects = projects.filter((project) => project.id !== id)

  localStorage.setItem(storageKey, JSON.stringify(nextProjects))

  return id
}
