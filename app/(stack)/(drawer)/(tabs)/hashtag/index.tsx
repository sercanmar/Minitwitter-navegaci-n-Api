import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useHashtags } from '@/hooks/useHashtags'; 
import { Hashtag } from '@/types/hashtag';

const HashtagTabScreen = () => {
    const { query } = useHashtags();
    const router = useRouter();

    if (query.isLoading) {
        return (
            <View className="flex-1 justify-center items-center bg-quaternary">
                <ActivityIndicator size="large" color="#1DA1F2" />
            </View>
        );
    }

    return (
        <SafeAreaView edges={['top']} className="flex-1 bg-quaternary">
            <View className="px-4 py-3 border-b border-gray-200 bg-white">
                <Text className="font-bold text-xl">Tendencias para ti</Text>
            </View>

            <FlatList
                data={query.data ?? []}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <HashtagItem 
                        hashtag={item} 
                        onPress={() => router.push(`/feed/hashtag/${item.id}?name=${item.tag}`)}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const HashtagItem = ({ hashtag, onPress }: { hashtag: Hashtag, onPress: () => void }) => {
    return (
        <Pressable 
            onPress={onPress}
            className="px-4 py-4 border-b border-gray-200 bg-white active:bg-gray-100"
        >
            <Text className="font-bold text-base text-gray-900 mb-1">
                #{hashtag.tag}
            </Text>

        </Pressable>
    );
};

export default HashtagTabScreen;