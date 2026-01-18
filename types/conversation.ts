import { User } from "./user";

export interface Conversation {
    id: number;
    user: User; 
    lastMessage: string; 
    date: string;
}