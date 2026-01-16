import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsersAction } from "@/core/actions/user/get-users.action";
import { followUserAction } from "@/core/actions/user/follow-user.action";
import { Alert } from "react-native";

export const useUsers = () => {
    const queryClient = useQueryClient();
    const usersQuery = useQuery({
        queryKey: ['users', 'all'],
        queryFn: getUsersAction,
    });


    const followMutation = useMutation({
        mutationFn: followUserAction,
        onSuccess: () => {
            Alert.alert("Éxito", "Ahora sigues a este usuario");
        },
        onError: () => {
            Alert.alert("Error", "No se pudo realizar la acción");
        }
    });

    return {
        usersQuery,
        followUser: followMutation.mutate, 
    };
};