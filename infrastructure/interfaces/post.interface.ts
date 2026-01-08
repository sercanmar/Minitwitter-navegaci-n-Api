export interface Post {
    id: number;
    message: string;
    author: string;
    username: string;
    avatar: string;
    likes: number;
    retweets: number;
    replies: number;
    date: Date;
}