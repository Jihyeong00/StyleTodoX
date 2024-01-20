'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { ITodoType } from '@/types/todo';
import useTextarea from '@/hooks/use-textarea';
import { stylex } from '@stylexjs/stylex';
import { S } from './OneTodo.style';

type propsType = {
  todo: ITodoType;
  checkTodo: (id: number) => void;
  updateTodo: (id: number, editContent: string) => void;
  deleteTodo: (id: number) => void;
};

const OneTodo = ({ todo, updateTodo, deleteTodo, checkTodo }: propsType) => {
  const { id, state, title, content } = todo;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, onChangeEditContent] = useTextarea(content);

  const handleCheckTodo = () => {
    checkTodo(id);
  };

  const handleTodoEdit = () => {
    if (!isEditMode) return setIsEditMode(true);
    updateTodo(id, editContent);
    setIsEditMode(false);
  };

  const handleTodoDelete = () => {
    deleteTodo(id);
  };

  return (
    <div {...stylex.props(S.container)}>
      <div {...stylex.props(S['flex-between'])}>
        <div {...stylex.props(S.pointer)} onClick={handleCheckTodo}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div {...stylex.props(S['flex-between'])}>
          <span className={state ? 'line-through' : ''}>{title}</span>
          <div className={`flex gap-2 items-center ml-2`}>
            <FontAwesomeIcon
              {...stylex.props(S.pointer)}
              icon={faPen}
              onClick={handleTodoEdit}
            />
            <FontAwesomeIcon
              {...stylex.props(S.pointer)}
              icon={faBan}
              onClick={handleTodoDelete}
            />
          </div>
        </div>
      </div>
      <div>
        {isEditMode ? (
          <textarea
            value={editContent}
            onChange={onChangeEditContent}
          ></textarea>
        ) : (
          <span className={state ? 'line-through' : ''}>{content}</span>
        )}
      </div>
    </div>
  );
};
export default OneTodo;
