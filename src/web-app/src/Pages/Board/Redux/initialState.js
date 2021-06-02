const initialState = {
  boardDataIsLoading: false,
  lastTaskId: 3,
  tasks: {
    '1': {
      id: '1',
      title: 'Ошибка валидации',
      description: '',
      urgency: ''
    },
    '2': {
      id: '2',
      title: 'Ошибка при регистрации',
      description: '',
      urgency: ''
    },
    '3': {
      id: '3',
      title: 'Неточное поведение при создании нового списка',
      description: '',
      urgency: ''
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Новые баги',
      tasksIds: ['1', '2', '3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'В работе',
      tasksIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Выполнено',
      tasksIds: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'Отклонено',
      tasksIds: [],
    }
  },
  lastColumnId: 4,
  // Facilitate reordering of the columns
  columnOrder: [
    'column-1',
    'column-2',
    'column-3',
    'column-4'
  ]
}

export default initialState;