import { twitterApi } from "@/core/api/twitter-api";
import { TwitterPostResponse } from "@/infrastructure/interfaces/twitter-response";
import { PostMapper } from "@/infrastructure/mappers/post.mapper";

export const getFeedAction = async () => {
    try {

        const { data } = await twitterApi.get<TwitterPostResponse[]>('/posts');

       
        const posts = data.map(PostMapper.fromApiToPost);

        return posts;

    } catch (error) {
        console.log(error);

        throw "no se pudieron cargar los posts";
    }
};