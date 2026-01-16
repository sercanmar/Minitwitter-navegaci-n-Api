import { User } from "@/types/user";
import { TwitterUserResponse } from "../interfaces/twitter-user.response";

export class UserMapper {
    static fromApiToUser(apiUser: TwitterUserResponse): User {
        return {
            id: apiUser.id,
            fullName: apiUser.name,
            username: apiUser.username,
            avatar: apiUser.avatarUrl,
            bio: apiUser.bio,
        };
    }
}