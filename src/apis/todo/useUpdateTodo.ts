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

export const useUpdateTodo = () => {
  const { mutateAsync: updateTodo } = useMutation<
    ResponseType,
    AxiosError,
    Partial<RequestType>
  >(async (data) => {
    const response = await axiosInstance.put('todo', data);
    return response.data;
  });

  return { updateTodo };
};
