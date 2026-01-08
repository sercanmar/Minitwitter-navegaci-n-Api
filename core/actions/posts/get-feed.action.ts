import { twitterApi } from "@/core/api/twitter-api";
import { TwitterPostResponse } from "@/infrastructure/interfaces/twitter-response";
import { PostMapper } from "@/infrastructure/mappers/post.mapper";

export const getFeedAction = async () => {
    try {
        // pedimos los posts a la url /posts
        const { data } = await twitterApi.get<TwitterPostResponse[]>('/posts');

        // convertimos la lista rara en nuestra lista limpia usando el mapper
        const posts = data.map(PostMapper.fromApiToPost);

        return posts;

    } catch (error) {
        console.log(error);
        // si falla lanzamos un error simple
        throw "no se pudieron cargar los posts";
    }
};