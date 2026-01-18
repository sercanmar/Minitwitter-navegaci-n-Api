import { twitterApi } from "@/core/api/twitter-api";
export const followUserAction = async (targetUserId: number, myId: number): Promise<boolean> => {
    try {
        await twitterApi.post(`/users/${targetUserId}/follow?userId=${myId}`, {}); 
        return true;
    } catch (error) {
        console.log("Error al seguir:", error);
        throw "No se pudo seguir al usuario";
    }
};