export const PROJECTS = [
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

export const TASKS = [
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
