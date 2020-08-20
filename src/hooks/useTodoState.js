import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      const updateTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updateTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    }
  };
};
