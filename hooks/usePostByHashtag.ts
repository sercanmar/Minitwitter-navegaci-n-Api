import { useQuery } from "@tanstack/react-query";
import { getPostsByHashtagAction } from "@/core/actions/posts/get-posts-by-hashtag.action";

export const usePostsByHashtag = (tag: string) => {
    const query = useQuery({
        queryKey: ['posts', 'hashtag', tag],
        queryFn: () => getPostsByHashtagAction(tag),
        staleTime: 1000 * 60 * 5,
    });

    return { query };
};