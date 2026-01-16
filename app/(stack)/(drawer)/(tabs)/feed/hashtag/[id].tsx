import React from 'react';
import { View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { usePostsByHashtag } from '../../../../../../hooks/usePostByHashtag'; 
import PostHashtagCard from '../../../../../../components/post/PostHashtagCard'; 

const HashtagScreen = () => {
    const { id, name } = useLocalSearchParams();
    const hashtagId = Number(id);
    const hashtagName = name as string;

    const { query } = usePostsByHashtag(hashtagId);

 return (
        <View className="flex-1 bg-quaternary">
            <Stack.Screen 
                options={{ 
                    title: `#${hashtagName || 'Hashtag'}`,
                    headerStyle: { backgroundColor: '#AAB8C2' }, 
                    headerShadowVisible: false, 
                    headerTintColor: 'white', 
                }} 
            />

            <PostHashtagCard 
                posts={query.data ?? []} 
                isLoading={query.isLoading} 
            />
        </View>
    );
};

export default HashtagScreen;