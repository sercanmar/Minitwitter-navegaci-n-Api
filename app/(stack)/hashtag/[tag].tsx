import React from 'react';
import { View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { usePostsByHashtag } from '../../../hooks/usePostByHashtag'; 
import PostHashtagCard from '../../../components/post/PostHashtagCard'; 

const HashtagScreen = () => {
    const { tag } = useLocalSearchParams();
    const tagName = tag as string;
    const { query } = usePostsByHashtag(tagName);

    return (
        <View className="flex-1 bg-quaternary">
            <Stack.Screen options={{ title: `#${tagName}` }} />
            <PostHashtagCard 
                posts={query.data ?? []} 
                isLoading={query.isLoading} 
            />
        </View>
    );
};

export default HashtagScreen;