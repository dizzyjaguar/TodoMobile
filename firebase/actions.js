import { useTodoStore } from '../stores/TodoProvider';
import { todoCollection } from './firebase';


export const createTodo = (todo) => {
  return todoCollection.add(todo)
    .then(function(docRef) {
      return docRef.id
    })
};

export const deleteTodo = id => todoCollection.doc(id).delete();

// needed to rememebr to return top level function and the nested function
export const getTodos = () => {
  return todoCollection.get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));  
    })
} 