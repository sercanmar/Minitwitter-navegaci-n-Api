import { Hashtag } from "@/types/hashtag";
import { TwitterHashtagResponse } from "../interfaces/twitter-hashtag.response";

export class HashtagMapper {
    static fromApiToHashtag(apiHashtag: TwitterHashtagResponse): Hashtag {
        return {
            id: apiHashtag.id,
            tag: apiHashtag.tag,
            postsCount: apiHashtag.postsCount || (Array.isArray(apiHashtag.posts) ? apiHashtag.posts.length : 0),
        };
    }
}