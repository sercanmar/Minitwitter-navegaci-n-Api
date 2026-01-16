import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostCard from '@/components/post/PostCard';
import { usePosts } from '@/presentation/hooks/usePosts';

const FeedScreen = () => {
    const { feedQuery } = usePosts();
    const router = useRouter();

    if (feedQuery.isLoading) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-quaternary">
                <ActivityIndicator size="large" color="#1DA1F2" />
            </SafeAreaView>
        );
    }

    if (feedQuery.isError) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-quaternary">
                <Text>Error al cargar los posts</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView edges={['left', 'right']} className="flex-1 bg-quaternary">
            <FlatList
                data={feedQuery.data ?? []}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                   
                        <PostCard post={item} />
                    
                )}
            />
        </SafeAreaView>
    );
}

export default FeedScreen;