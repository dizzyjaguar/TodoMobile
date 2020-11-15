import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { observer, useObserver } from 'mobx-react';
import { Button, Text } from 'react-native';
import { deleteTodo, getTodos } from '../firebase/actions';
import { useTodoStore } from '../stores/TodoProvider';


const List = observer(() => {
  const todoStore = useTodoStore();
  
  useEffect(() => {
    getTodos()
        .then(data => todoStore.setTodos(data))
  }, [])
  
  // if a todo is created right before we fetch to Firebase, then the corresponding Id per goal is different from when its just obtimistically generated for MobX, then a real ID gets assigned from Firebase, need to figure out how to address this.
  const handleTouch = (todo) => {
    todoStore.deleteTodo(todo)
    deleteTodo(todo.id);
  }
  
  console.log(toJS(todoStore))

  const todoNodes = todoStore.todos.map(todo => {
    return (
      <>
      <Text>{todo.todo}</Text>
      <Button
        color='black'
        onPress={() => handleTouch(todo)}
        title='Delete'
      />
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