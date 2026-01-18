import { useQuery } from "@tanstack/react-query";
import { getUsersAction } from "@/core/actions/user/get-users.action";
import { followUserAction } from "@/core/actions/user/follow-user.action";
import { Alert } from "react-native";

const MY_USER_ID = 42;

export const useUsers = () => {
    
    const usersQuery = useQuery({
        queryKey: ['users', 'all'],
        queryFn: getUsersAction,
    });

    const followUser = async (targetUserId: number) => {
        try {
            await followUserAction(targetUserId, MY_USER_ID);
            
            Alert.alert("bien");
            
        } catch (error) {
            Alert.alert("error");
        }
    };

    return {
        usersQuery,
        followUser,
    };
};