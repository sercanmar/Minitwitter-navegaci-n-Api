import { twitterApi } from "@/core/api/twitter-api";
import { TwitterPostResponse } from "@/infrastructure/interfaces/twitter-response";
import { PostMapper } from "@/infrastructure/mappers/post.mapper";
import { Post } from "@/types/post";

export const getPostsByHashtagAction = async (tag: string): Promise<Post[]> => {
    try {
        const { data } = await twitterApi.get<TwitterPostResponse[]>(`/posts/tag/${tag}`);
        return data.map(PostMapper.fromApiToPost);
    } catch (error) {
        throw "error al cargar posts del hashtag";
    }
};