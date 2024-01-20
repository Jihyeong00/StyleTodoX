'use client';

import { FormEvent } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { stylex } from '@stylexjs/stylex';
import { S } from './styles';

type propsType = {
  onAddToDo: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
};

const TodoAddModal = ({ onAddToDo, onClose }: propsType) => {
  return (
    <div>
      <div onClick={onClose} className={'modalBackGround'} />
      <form
        {...stylex.props(S.form)}
        onSubmit={onAddToDo}
      >
        <div
          {...stylex.props(S.addButton)}
         >
          <span {...stylex.props(S.h4)}>ADD TODO LIST</span>
          <button type="button" onClick={onClose}>
            <FontAwesomeIcon size={'xl'} icon={faTimes} />
          </button>
        </div>
        <div {...stylex.props(S.inputBox)}>
          <input
            {...stylex.props(S.input)}
            placeholder="제목을 입력해주세요"
            name="title"
          />
          <textarea
            {...stylex.props(S.textArea)}
            placeholder="할 일 내용을 입력해주세요"
            name="content"
          ></textarea>
        </div>
        <button>ADD</button>
      </form>
    </div>
  );
};
export default TodoAddModal;
