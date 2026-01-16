import { twitterApi } from "@/core/api/twitter-api";

export const followUserAction = async (userId: number): Promise<boolean> => {
    try {
        await twitterApi.post(`/users/${userId}/follow`, {}); 
        return true;
    } catch (error) {
        console.log("Error following user:", error);
        throw "No se pudo seguir al usuario";
    }
};