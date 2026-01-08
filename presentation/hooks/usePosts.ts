import { useQuery } from "@tanstack/react-query";
import { getFeedAction } from "@/core/actions/posts/get-feed.action";

export const usePosts = () => {
    const feedQuery = useQuery({
        queryKey: ['posts', 'feed'],
        queryFn: getFeedAction,
        staleTime: 1000 * 60 * 60, // 1 hora
    });

    return {
        feedQuery,
    };
};