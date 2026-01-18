import { useQuery } from "@tanstack/react-query";
import { getConversationsAction } from "@/core/actions/messages/get-conversations.action";

const MY_USER_ID = 42; 

export const useConversations = () => {
    const query = useQuery({
        queryKey: ['conversations', 'my-list'],
        queryFn: () => getConversationsAction(MY_USER_ID),
    });

    return { query };
};