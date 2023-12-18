import {useMutation} from "react-query";
import {axiosInstance} from "@/apis/axiosInstace";
import {AxiosError} from "axios";

interface RequestType {
    postId: string;
}

interface ResponseType {
    message: string;
}

export const useDeleteTodo = () => {
    const {mutateAsync: deleteTodo} = useMutation<ResponseType, AxiosError, RequestType>(
        async ({postId}) => {
            const response = await axiosInstance.delete('todo', {
                data: {postId}
            });
            return response.data;
        }
    );

    return {deleteTodo};
};

