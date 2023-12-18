import { ITodoType } from '@/types/todo';
import { Dispatch, SetStateAction } from 'react';
import OneTodo from '@/app/todo/[todoId]/_components/List/OneTodo';

type propsType = {
  todoList: ITodoType[];
  setTodoList: Dispatch<SetStateAction<ITodoType[]>>;
};

const TodoList = ({ todoList, setTodoList }: propsType) => {
  const checkTodo = (id: number) => {
    const _todoList = [...todoList];
    const todo = _todoList.find((todo) => todo.id === id)!;

    todo.state = !todo.state;
    setTodoList(_todoList);
  };

  const updateTodo = (id: number, content: string) => {
    const _todoList = [...todoList];
    const todo = _todoList.find((todo) => todo.id === id)!;

    todo.content = content;
    setTodoList(_todoList);
  };

  const deleteTodo = (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까')) {
      const _todoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(_todoList);
    }
  };

  return (
    <div className={'flex flex-col gap-2'}>
      {todoList.map((todo) => (
        <OneTodo
          key={todo.id}
          todo={todo}
          checkTodo={checkTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
