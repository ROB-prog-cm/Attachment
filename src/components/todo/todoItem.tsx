import * as React from 'react';
import styles from './styles.module.scss';
import Context from '../../../context';
import { useContext } from 'react';

interface IProps {
  todo;
  index;
  onChange;
}

const TodoItem = ({ todo, index, onChange }: IProps) => {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push('done');
  }
  return (
    <li className={styles.li}>
      <span className={classes.join('  ')}>
        <input
          checked={todo.completed}
          className={styles.input}
          onChange={() => onChange(todo.id)}
          type="checkbox"
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className={styles.btn} onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
