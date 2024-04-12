import { createContext, useReducer } from 'react';
import { PROJECTS, TASKS } from '../assets/DUMMY_DATA';

export const ProjectsContext = createContext({
  projects: [],
  tasks: [],
  selectedProjectId: undefined,
  startAddProject: () => {},
  addProject: () => {},
  deleteProject: () => {},
  cancelAddProject: () => {},
  selectProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
});

function projectsReducer(state, action) {
  if (action.type === 'START_ADD_PROJECT') {
    return {
      ...state,
      selectedProjectId: null,
    };
  }

  if (action.type === 'CANCEL_ADD_PROJECT') {
    return {
      ...state,
      selectedProjectId: undefined,
    };
  }

  if (action.type === 'ADD_PROJECT') {
    const newProject = {
      ...action.payload,
      id: Math.random(),
    };
    return {
      ...state,
      selectedProjectId: newProject.id,
      projects: [...state.projects, newProject],
    };
  }

  if (action.type === 'DELETE_PROJECT') {
    return {
      ...state,
      selectedProjectId: undefined,
      projects: state.projects.filter(
        (project) => project.id !== state.selectedProjectId
      ),
    };
  }

  if (action.type === 'SELECT_PROJECT') {
    return {
      ...state,
      selectedProjectId: action.payload.id,
    };
  }

  if (action.type === 'ADD_TASK') {
    const newTask = {
      text: action.payload,
      projectId: state.selectedProjectId,
      id: Math.random(),
    };
    return {
      ...state,
      tasks: [newTask, ...state.tasks],
    };
  }

  if (action.type === 'DELETE_TASK') {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }
}

export default function ProjectsContextProvider({ children }) {
  const [projectsState, projectsDispatch] = useReducer(projectsReducer, {
    selectedProjectId: undefined,
    projects: PROJECTS,
    tasks: TASKS,
  });

  function handleStartAddProject() {
    projectsDispatch({
      type: 'START_ADD_PROJECT',
    });
  }

  function handleCancelAddProject() {
    projectsDispatch({
      type: 'CANCEL_ADD_PROJECT',
    });
  }

  function handleAddProject(projectData) {
    projectsDispatch({
      type: 'ADD_PROJECT',
      payload: projectData,
    });
  }

  function handleDeleteProject() {
    projectsDispatch({
      type: 'DELETE_PROJECT',
    });
  }

  function handleSelectProject(project) {
    projectsDispatch({
      type: 'SELECT_PROJECT',
      payload: project,
    });
  }

  function handleAddTask(text) {
    projectsDispatch({
      type: 'ADD_TASK',
      payload: text,
    });
  }

  function handleDeleteTask(deletedTask) {
    projectsDispatch({
      type: 'DELETE_TASK',
      payload: deletedTask,
    });
  }

  const ctxValue = {
    projects: projectsState.projects,
    tasks: projectsState.tasks,
    selectedProjectId: projectsState.selectedProjectId,
    startAddProject: handleStartAddProject,
    addProject: handleAddProject,
    deleteProject: handleDeleteProject,
    cancelAddProject: handleCancelAddProject,
    selectProject: handleSelectProject,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
