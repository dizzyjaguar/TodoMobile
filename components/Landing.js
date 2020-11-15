import React from 'react';
import { Text } from 'react-native';
import { TodoProvider } from '../stores/TodoProvider';
import Input from './Input';
import List from './List';

const Landing = () => {
  return (
    <>
      <TodoProvider>
        <Input />
        <List />
      </TodoProvider>
    </>
  );
};

export default Landing;