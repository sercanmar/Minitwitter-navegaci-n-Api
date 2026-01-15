import { ImageSourcePropType } from "react-native";

export interface Post {
    id: number;
    userAvatar: string;
    userName: string;
    content: string;
    imageUrl?: string;
    likes: number;
    retweets: number;
    replies: number;
    createdAt: string; 
    hashtags: string[];
}
