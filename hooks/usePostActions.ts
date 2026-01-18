import { toggleLikeAction } from "@/core/actions/posts/boton-like.action";

const MY_USER_ID = 42; 

export const usePostActions = () => {
    
    const likePost = async (postId: number) => {
        try {
            await toggleLikeAction(postId, MY_USER_ID);
            console.log("like");
            return true;
        } catch (error) {
            console.log("error", error);
            return false;
        }
    };

    return {
        likePost, 
    };
};