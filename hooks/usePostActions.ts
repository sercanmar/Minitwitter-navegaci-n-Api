import { useMutation } from "@tanstack/react-query";
import { toggleLikeAction } from "../core/actions/posts/boton-like.action"; // O donde hayas guardado la acción de arriba

export const usePostActions = () => {
    
    const likeMutation = useMutation({
        mutationFn: toggleLikeAction,
        onSuccess: (data) => {
           
            console.log("Like realizado con éxito");
        },
        onError: (error) => {
            console.log("Error al dar like", error);
        }
    });

    return {
        likePost: likeMutation.mutate, 
    };
};