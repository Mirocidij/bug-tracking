const initialData = {
  lastTaskId: 13,
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Something string how very very long in its length' },
    'task-5': { id: 'task-5', content: 'Something string how very very long in its length' },
    'task-6': { id: 'task-6', content: 'Something string how very very long in its length' },
    'task-7': { id: 'task-7', content: 'Something string how very very long in its length' },
    'task-8': { id: 'task-8', content: 'Something string how very very long in its length' },
    'task-9': { id: 'task-9', content: 'Something string how very very long in its length' },
    'task-10': { id: 'task-10', content: 'Something string how very very long in its length' },
    'task-11': { id: 'task-11', content: 'Something string how very very long in its length' },
    'task-12': { id: 'task-12', content: 'Something string how very very long in its length' },
    'task-13': { id: 'task-13', content: 'Something string how very very long in its length' },
  },
  lastColumnId: 8,
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do:',
      tasksIds: ['task-1', 'task-2', 'task-3', 'task-4', "task-5", "task-6", "task-7", "task-8", "task-9", "task-10", "task-11", "task-12", "task-13",],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress:',
      tasksIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done:',
      tasksIds: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'Done:',
      tasksIds: [],
    },
    'column-5': {
      id: 'column-5',
      title: 'Done:',
      tasksIds: [],
    },
    'column-6': {
      id: 'column-6',
      title: 'Done:',
      tasksIds: [],
    },
    'column-7': {
      id: 'column-7',
      title: 'Done:',
      tasksIds: [],
    },
    'column-8': {
      id: 'column-8',
      title: 'Done:',
      tasksIds: [],
    },

  },
  // Facilitate reordering of the columns
  columnOrder: [
    'column-1',
    'column-2',
    'column-3',
    'column-4',
    'column-5',
    'column-6',
    'column-7',
    'column-8',
  ]
};

export default initialData;