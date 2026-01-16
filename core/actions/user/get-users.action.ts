import { twitterApi } from "@/core/api/twitter-api";
import { TwitterUserResponse } from "@/infrastructure/interfaces/twitter-user.response";
import { UserMapper } from "@/infrastructure/mappers/user.mapper";
import { User } from "@/types/user";

export const getUsersAction = async (): Promise<User[]> => {
    try {
        const { data } = await twitterApi.get<TwitterUserResponse[]>('/users');
        return data.map(UserMapper.fromApiToUser);
    } catch (error) {
        console.log("Error getting users:", error);
        throw "No se pudieron cargar los usuarios";
    }
};