// import { useRef } from 'react';
import { useState } from 'react';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import Project from './components/Project';
import NewProject from './components/NewProject';

const PROJECTS = [
  {
    id: 1,
    title: 'Learn React',
    description: 'Lorem Ipsum',
    dueDate: '04/05/2024',
    tasks: ['task one', 'task two', 'task three'],
  },
  {
    id: 2,
    title: 'Second Project',
    description: 'More orem Ipsum',
    dueDate: '04/10/2024',
    tasks: ['new task one', 'new task two', 'new task three'],
  },
];

const TASKS = [
  {
    id: 1,
    projectId: 1,
    text: 'task one',
  },
  {
    id: 2,
    projectId: 1,
    text: 'task two',
  },
  {
    id: 3,
    projectId: 1,
    text: 'task tree',
  },
  {
    id: 4,
    projectId: 2,
    text: 'new task one',
  },
  {
    id: 5,
    projectId: 2,
    text: 'new task two',
  },
  {
    id: 6,
    projectId: 2,
    text: 'new task tree',
  },
];

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: PROJECTS,
    tasks: TASKS,
  });

  function handleStartAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevProjectsState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevProjectsState,
        selectedProjectId: newProject.id,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevProjectsState) => {
      // let allProjects = [...prevProjectsState.projects];
      // const deletedIndex = allProjects.indexOf(project);
      // allProjects.splice(deletedIndex, 1);

      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        // projects: allProjects,
        projects: prevProjectsState.projects.filter(
          (project) => project.id !== prevProjectsState.selectedProjectId
        ),
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(project) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: project.id,
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevProjectsState) => {
      const newTask = {
        text: text,
        projectId: prevProjectsState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevProjectsState,
        tasks: [newTask, ...prevProjectsState.tasks],
      };
    });
  }

  function handleDeleteTask(deletedTask) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        tasks: prevProjectsState.tasks.filter(
          (task) => task.id !== deletedTask.id
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const selectedProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  let content = (
    <Project
      project={selectedProject}
      // tasks={selectedProjectTasks}
      tasks={projectsState.tasks}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
