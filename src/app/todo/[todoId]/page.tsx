"use client"

import React, {FormEvent, useState} from "react";
import styled from "styled-components";
import {ToastContainer, toast, ToastContainerProps} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoAddModal from "@/app/todo/[todoId]/_components/Modal";
import TodoList from "@/app/todo/[todoId]/_components/List/TodoList";
import {ITodoType} from "@/types/todo";
import BasicButton from '@/app/_components/Button'
import {flexAlignCenter, flexCenter} from "@/styles/common";
import {useSearchParams} from "next/navigation";

export default function TodoPage() {
    const searchParams = useSearchParams();
    console.log(searchParams.get('todoId'));

    const [isAddTodoModal, setIsAddTodoModal] = useState(false);
    const [todoList, setTodoList] = useState<ITodoType[]>([
        {
            id: 1,
            title: "example1",
            content: "content1",
            state: false,
        },
        {
            id: 2,
            title: "example2",
            content: "content2",
            state: false,
        },
        {
            id: 3,
            title: "example3",
            content: "content3",
            state: false,
        },
    ]);

    const addTodo = (title: string, content: string) => {
        return new Promise<{ id: number; state: boolean; title: string; content: string }>((resolve) =>
            setTimeout(() => {
                const newTodo = {
                    id: Math.floor(Math.random() * 100000),
                    state: false,
                    title,
                    content,
                };
                resolve(newTodo);
            }, 3000),
        ).then((todo) => {
                setTodoList([todo, ...todoList]);
                setIsAddTodoModal(false);
            }
        )
            ;
    };

    const showTodoToastMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: {
                value: string
            }
            content: {
                value: string
            }
        }

        const title = target.title.value;
        const content = target.content.value;
        toast.promise(addTodo(title, content), {
            pending: "TODO LOADING",
            success: "TODO SUCCESS",
            error: "TODO ERROR",
        });
    };

    const toastOption: ToastContainerProps = {
        autoClose: 2000,
        theme: "colored",
    };

    const handAddTodoModal = () => {
        setIsAddTodoModal(true);
    };

    const handleCloseTodoModal = () => {
        setIsAddTodoModal(false);
    };

    return (
        <>
            {isAddTodoModal && (
                <TodoAddModal
                    onAddToDo={showTodoToastMessage}
                    onClose={handleCloseTodoModal}
                />
            )}
            <S.Wrapper>
                <S.Container>
                    <S.Title>List</S.Title>
                    <S.Content>
                        <TodoList todoList={todoList} setTodoList={setTodoList}/>
                    </S.Content>
                    <S.ButtonBox>
                        <BasicButton variant={"primary"} size={'full'} shape={'default'}
                                     onClick={handAddTodoModal}>
                            추가
                        </BasicButton>
                    </S.ButtonBox>
                </S.Container>
            </S.Wrapper>
            <ToastContainer {...toastOption}/>
        </>
    );
};

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({theme}) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({theme}) => theme.PALETTE.primary[300]};
  color: ${({theme}) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
    Wrapper,
    Container,
    Title,
    ButtonBox,
    Content,
};
