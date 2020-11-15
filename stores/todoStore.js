import nextId from 'react-id-generator';

export const createTodoStore = () => {
  return {
    todos: [],
    setTodos(data) {
      this.todos = data
    },
    addTodo(todo) {
      this.todos.push({
        todo,
        id: nextId()
      });
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter(item => item.id !== todo.id)
    }
  };
};