import * as React from 'react';
import styles from './styles.module.scss';
import TodoList from '@components/todo/todoList';
import Context from '../../../context';
import Loader from './Loader';
import { useEffect } from 'react';
import Modal from '../modal/modal';
interface IProps {
  todos;
}

const AddTodo = React.lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(import('../todo/addTodo'));
      }, 3000);
    })
);

const Header = ({}: IProps) => {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className={styles.wrapper}>
        <h1>React tutorial</h1>
        <Modal></Modal>
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo}></AddTodo>
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No Todo !</p>
        )}
      </div>
    </Context.Provider>
  );
};

export default Header;
