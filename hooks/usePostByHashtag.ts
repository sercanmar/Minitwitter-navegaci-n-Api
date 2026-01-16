import { useQuery } from "@tanstack/react-query";
import { getPostsByHashtagAction } from "@/core/actions/posts/get-posts-by-hashtag.action";

export const usePostsByHashtag = (hashtagId: number) => {
    const query = useQuery({
        queryKey: ['posts', 'hashtag', hashtagId],
        queryFn: () => getPostsByHashtagAction(hashtagId),
    });
    return { query };
};