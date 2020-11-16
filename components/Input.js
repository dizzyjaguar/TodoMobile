import { toJS } from 'mobx';
import { Observer, useObserver } from 'mobx-react';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { useTodoStore } from '../stores/TodoProvider';
import { createTodo } from '../firebase/actions';
import style from '../styles/style';

const Input = () => {
  const [todo, setTodo] = useState('')
  const todoStore = useTodoStore();

  const handleTouch = () => {
    todoStore.addTodo(todo);
  }


  //figure out the other way to wrap comps in Observer instead of the hook
  return useObserver(() => (
    <>
      
        <TextInput
          style={style.input}
          placeholder='enter text here'
          placeholderTextColor={'white'}
          onChangeText={todo => setTodo(todo)}         
        />
        <Button
          color='mediumseagreen'
          onPress={handleTouch}
          title='Add Todo'
        />
      
    </>
  ));
};

export default Input;