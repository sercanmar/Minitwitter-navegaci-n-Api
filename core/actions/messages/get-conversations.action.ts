import { twitterApi } from "@/core/api/twitter-api";
import { UserMapper } from "@/infrastructure/mappers/user.mapper";
import { Conversation } from "@/types/conversation";

export const getConversationsAction = async (myUserId: number): Promise<Conversation[]> => {
    try {
      
        const { data } = await twitterApi.get<any[]>(`/users/${myUserId}/conversations`);
        
      
        return data.map(item => ({
            id: item.id || Math.random(), 
            user: UserMapper.fromApiToUser(item.user || item), 
            lastMessage: item.lastMessage || "Haz click para leer el chat",
            date: item.lastMessageAt || new Date().toISOString()
        }));

    } catch (error) {
        console.log("Error cargando conversaciones:", error);
        throw "No se pudieron cargar los chats";
    }
};