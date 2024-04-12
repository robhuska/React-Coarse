import { useContext } from 'react';
import { ProjectsContext } from '../store/ProjectsContextProvider';
import NoProjectSelected from './NoProjectSelected';
import Project from './Project';
import NewProject from './NewProject';

export default function Content() {
  const { projects, tasks, selectedProjectId } = useContext(ProjectsContext);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  const selectedProjectTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );

  let content = (
    <Project project={selectedProject} tasks={selectedProjectTasks} />
  );

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }

  return <>{content}</>;
}
