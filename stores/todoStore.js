import nextId from 'react-id-generator';
import { createTodo } from '../firebase/actions';

export const createTodoStore = () => {
  return {
    todos: [],
    setTodos(data) {
      this.todos = data
    },

    addTodo(todo) {
      // fireStoreCreateTodo to get the res id 
      createTodo({ 
        todo,
       })
        .then((res) =>{
          this.todos.push({
            id: res,
            todo,
          });
        })
    },

    deleteTodo(todo) {
      this.todos = this.todos.filter(item => item.id !== todo.id)
    }
  };
};