import { Post } from "@/types/post"; 
import { TwitterPostResponse } from "../interfaces/twitter-response";

export class PostMapper {
    static fromApiToPost(apiPost: TwitterPostResponse): Post {
        return {
            id: apiPost.id,
            userAvatar: apiPost.user.avatarUrl,
            userName: apiPost.user.name, 
            content: apiPost.content,
            imageUrl: undefined, 
            likes: apiPost.likesCount,
            retweets: apiPost.retweetsCount,
            replies: apiPost.repliesCount,
            createdAt: apiPost.createdAt,
            hashtags: apiPost.hashtags.map(h => h.tag)
        };
    }
}