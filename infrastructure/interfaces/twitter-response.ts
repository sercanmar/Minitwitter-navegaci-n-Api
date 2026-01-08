
export interface TwitterPostUser {
    id: number;
    username: string;
    name: string;
    bio: string;
    avatarUrl: string;
}

export interface TwitterPostResponse {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    likesCount: number;
    retweetsCount: number;
    bookmarksCount: number;
    repliesCount: number;
    user: TwitterPostUser;
    inReplyTo: string | null;
    repostOf: string | null;
    hashtags: string[];
}