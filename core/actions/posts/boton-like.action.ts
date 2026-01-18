import { twitterApi } from "@/core/api/twitter-api";
import { TwitterPostResponse } from "@/infrastructure/interfaces/twitter-response";
import { PostMapper } from "@/infrastructure/mappers/post.mapper";
import { Post } from "@/types/post"; 

export const toggleLikeAction = async (postId: number, userId: number): Promise<Post> => {
    try {
        const { data } = await twitterApi.post<TwitterPostResponse>(`/posts/${postId}/like?userId=${userId}`);

        return PostMapper.fromApiToPost(data);
    } catch (error) {
        console.log(error);
        throw "Error al dar like";
    }
};