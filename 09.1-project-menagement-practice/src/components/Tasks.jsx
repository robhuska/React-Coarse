import { useContext } from 'react';
import { ProjectsContext } from '../store/ProjectsContextProvider';
import NewTask from './NewTask';

const Tasks = ({ tasks }) => {
  const { deleteTask } = useContext(ProjectsContext);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {tasks.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task, index) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => {
                  deleteTask(task);
                }}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks.
        </p>
      )}
    </section>
  );
};

export default Tasks;
