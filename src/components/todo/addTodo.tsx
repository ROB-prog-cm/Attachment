import * as React from 'react';
import styles from './styles.module.scss';
import { useState } from 'react';

interface IProps {
  onCreate;
}
function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
}

const AddTodo = ({ onCreate }: IProps) => {
  const input = useInputValue('');

  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value);
      input.clear();
    }
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
