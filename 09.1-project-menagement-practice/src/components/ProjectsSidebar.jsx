import { useContext } from 'react';
import Button from './Button';
import { ProjectsContext } from '../store/ProjectsContextProvider';

const ProjectsSidebar = () => {
  const { startAddProject, projects, selectProject, selectedProjectId } =
    useContext(ProjectsContext);

  // console.log(selectedProjectId);
  // console.log(projects);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={startAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project, index) => {
          let classes =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

          if (project.id === selectedProjectId) {
            classes += ' text-stone-200 bg-stone-800';
          } else {
            classes += ' text-stone-400';
          }

          return (
            <li key={project.title}>
              <button
                className={classes}
                onClick={() => selectProject(project)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
