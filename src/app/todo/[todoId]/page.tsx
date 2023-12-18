'use client';

import React, { FormEvent, useState } from 'react';
import { ToastContainer, toast, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoAddModal from '@/app/todo/[todoId]/_components/Modal';
import TodoList from '@/app/todo/[todoId]/_components/List/TodoList';
import { ITodoType } from '@/types/todo';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function TodoPage() {
  const searchParams = useSearchParams();
  console.log(searchParams.get('todoId'));

  const [isAddTodoModal, setIsAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState<ITodoType[]>([
    {
      id: 1,
      title: 'example1',
      content: 'content1',
      state: false,
    },
    {
      id: 2,
      title: 'example2',
      content: 'content2',
      state: false,
    },
    {
      id: 3,
      title: 'example3',
      content: 'content3',
      state: false,
    },
  ]);

  const addTodo = (title: string, content: string) => {
    return new Promise<{
      id: number;
      state: boolean;
      title: string;
      content: string;
    }>((resolve) =>
      setTimeout(() => {
        const newTodo = {
          id: Math.floor(Math.random() * 100000),
          state: false,
          title,
          content,
        };
        resolve(newTodo);
      }, 3000)
    ).then((todo) => {
      setTodoList([todo, ...todoList]);
      setIsAddTodoModal(false);
    });
  };

  const showTodoToastMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: {
        value: string;
      };
      content: {
        value: string;
      };
    };

    const title = target.title.value;
    const content = target.content.value;
    toast.promise(addTodo(title, content), {
      pending: 'TODO LOADING',
      success: 'TODO SUCCESS',
      error: 'TODO ERROR',
    });
  };

  const toastOption: ToastContainerProps = {
    autoClose: 2000,
    theme: 'colored',
  };

  const handAddTodoModal = () => {
    setIsAddTodoModal(true);
  };

  const handleCloseTodoModal = () => {
    setIsAddTodoModal(false);
  };

  return (
    <div className={'w-1/4 border-origin'}>
      <div className={'text-4xl bg-gray-200 p-2'}>Todo List</div>
      <div className={'border-origin p-2'}>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <Button className={'w-full mt-2'} onClick={handAddTodoModal}>
          추가
        </Button>
      </div>
      {isAddTodoModal && (
        <TodoAddModal
          onAddToDo={showTodoToastMessage}
          onClose={handleCloseTodoModal}
        />
      )}
      <ToastContainer {...toastOption} />
    </div>
  );
}
