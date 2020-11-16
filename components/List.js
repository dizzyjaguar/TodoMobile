import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer, useObserver } from 'mobx-react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { deleteTodo, getTodos } from '../firebase/actions';
import { useTodoStore } from '../stores/TodoProvider';
import style from '../styles/style';
// import style from '../styles/style';


const List = observer(() => {
  const todoStore = useTodoStore();
  
  useEffect(() => {
    getTodos()
        .then(data => todoStore.setTodos(data))
  }, [])
  
  const handleTouch = (todo) => {
    todoStore.deleteTodo(todo)
    deleteTodo(todo.id);
  }
  
  console.log(toJS(todoStore))

  const todoNodes = todoStore.todos.map(todo => {
    return (
      <>
      <Text style={style.todos}>{todo.todo}</Text>
      <TouchableOpacity
        onPress={() => handleTouch(todo)}
        style={style.deleteButton}
        >
        <Text style={style.deleteText}>Complete</Text>
      </TouchableOpacity>
      </>
      )
  })
  
  return (
    <>
      {todoNodes}
    </>
  );
});

export default List;