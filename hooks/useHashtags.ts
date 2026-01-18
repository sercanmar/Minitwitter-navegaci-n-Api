import { useQuery } from "@tanstack/react-query";
import { getHashtagsAction } from "@/core/actions/hashtags/get-hastags.action";

export const useHashtags = () => {
    const query = useQuery({
        queryKey: ['hashtags', 'list'],
        queryFn: getHashtagsAction,
        staleTime: 1000 * 60 * 10, 
    });

    return { query };
};