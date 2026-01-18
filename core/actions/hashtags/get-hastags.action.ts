import { twitterApi } from "@/core/api/twitter-api";
import { TwitterHashtagResponse } from "@/infrastructure/interfaces/twitter-hashtag.response";
import { HashtagMapper } from "../../../infrastructure/mappers/hastag.mapper";
import { Hashtag } from "@/types/hashtag";

export const getHashtagsAction = async (): Promise<Hashtag[]> => {
    try {
        const { data } = await twitterApi.get<TwitterHashtagResponse[]>('/hashtags');
        return data.map(HashtagMapper.fromApiToHashtag);
    } catch (error) {
        console.log("Error cargando hashtags:", error);
        throw "error cargha";
    }
};