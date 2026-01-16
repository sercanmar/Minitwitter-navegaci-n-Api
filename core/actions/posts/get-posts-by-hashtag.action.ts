import { twitterApi } from "@/core/api/twitter-api";
import { TwitterPostResponse } from "@/infrastructure/interfaces/twitter-response";
import { PostMapper } from "@/infrastructure/mappers/post.mapper";
import { Post } from "@/types/post";


export const getPostsByHashtagAction = async (hashtagId: number): Promise<Post[]> => {
    try {
        const { data } = await twitterApi.get<TwitterPostResponse[]>(`/hashtags/${hashtagId}/posts`);
        return data.map(PostMapper.fromApiToPost);
    } catch (error) {
        console.log("Error api hashtag:", error);
        throw "error al cargar posts del hashtag";
    }
};