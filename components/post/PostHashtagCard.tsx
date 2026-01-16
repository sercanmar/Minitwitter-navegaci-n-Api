import React from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import { Post } from '@/types/post';
import PostCard from './PostCard';

interface Props {
    posts: Post[];
    isLoading: boolean;
}

const PostHashtagCard = ({ posts, isLoading }: Props) => {

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center py-10">
                <ActivityIndicator size="large" color="#1DA1F2" />
            </View>
        );
    }
    if (posts.length === 0) {
        return (
            <View className="p-10 items-center">
                <Text className="text-gray-500 text-lg">
                    No hay tweets para este tema 🦗
                </Text>
            </View>
        );
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PostCard post={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
    );
};

export default PostHashtagCard;