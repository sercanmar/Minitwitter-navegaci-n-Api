import { twitterApi } from "@/core/api/twitter-api";
import { TwitterPostResponse } from '@/infrastructure/interfaces/twitter-response';
import { PostMapper } from '@/infrastructure/mappers/post.mapper';
import { Post } from '@/types/post';

export const getPostsAction = async (): Promise<Post[]> => {
    try {
      
        const { data } = await twitterApi.get<TwitterPostResponse[]>('/posts');
        
       
        return data.map(PostMapper.fromApiToPost);

    } catch (error) {
        console.log(error);
        throw 'error al cargar los posts';
    }
};