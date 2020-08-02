import uniqid from 'uniqid';

// eslint-disable-next-line import/prefer-default-export
export const fetchAPITodos = () => new Promise((resolve) => setTimeout(
  () => resolve([
    {
      id: uniqid(),
      title: 'Write React Hooks book',
      completed: true,
    },
    {
      id: uniqid(),
      title: 'Promote book',
      completed: false,
    },
  ]),
  100,
));
