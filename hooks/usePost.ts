import { useQuery } from "@tanstack/react-query";
import { getPostByIdAction } from "@/core/actions/posts/get-post-by-id.action"; 

export const usePost = (id: number) => {
    const postQuery = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPostByIdAction(id),
        staleTime: 1000 * 60 * 60, 
    });

    return {
        postQuery,
    };
};