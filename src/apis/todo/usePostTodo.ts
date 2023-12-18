import { useMutation } from 'react-query';
import { axiosInstance } from '@/apis/axiosInstace';
import { AxiosError } from 'axios';

interface RequestType {
  title: string;
  comment: string;
}

interface ResponseType {
  message: string;
}

export const usePostTodo = () => {
  const { mutateAsync: deleteTodo } = useMutation<
    ResponseType,
    AxiosError,
    RequestType
  >(async ({ title, comment }) => {
    const response = await axiosInstance.post('todo', {
      title,
      comment,
    });
    return response.data;
  });

  return { deleteTodo };
};
