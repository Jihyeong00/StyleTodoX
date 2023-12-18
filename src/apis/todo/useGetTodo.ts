import { useQuery } from 'react-query';
import { axiosInstance } from '@/apis/axiosInstace';
import { ITodoType } from '@/types/todo';

interface ResponseType {
  data: ITodoType[];
}

export const useGetTodo = () => {
  const { data: todoList } = useQuery<ResponseType>('todoList', async () => {
    const response = await axiosInstance.get('todo');
    return response.data;
  });

  return { todoList };
};
