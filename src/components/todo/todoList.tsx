import * as React from 'react';
import styles from './styles.module.scss';
import TodoItem from '@components/todo/todoItem';

interface IProps {
  todos;
  onToggle;
}

const TodoList = ({ todos, onToggle }: IProps) => {
  return (
    <ul className={styles.listStyle}>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={onToggle}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
