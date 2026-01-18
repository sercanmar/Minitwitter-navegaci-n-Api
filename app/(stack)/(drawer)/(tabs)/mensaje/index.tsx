import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useConversations } from '@/presentation/hooks/useConversations';

const MensajesScreen = () => {
    const { query } = useConversations();
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
                <Text className="font-bold text-xl">Mensajes</Text>
            </View>
            <FlatList
                data={query.data ?? []}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable 
                        className="flex-row px-4 py-3 border-b border-gray-200 bg-white items-center"
                        onPress={() => console.log("Ir al chat con:", item.user.username)}
                    >
                        <Image 
                            source={{ uri: item.user.avatar }} 
                            className="w-12 h-12 rounded-full mr-3 bg-gray-300"
                        />

                        <View className="flex-1">
                            <View className="flex-row justify-between">
                                <Text className="font-bold text-base text-black">
                                    {item.user.fullName}
                                </Text>
                                <Text className="text-gray-500 text-xs mt-1">
                                    {new Date(item.date).toLocaleDateString()}
                                </Text>
                            </View>
                            <Text className="text-gray-500 text-sm" numberOfLines={1}>
                                {item.lastMessage}
                            </Text>
                        </View>
                    </Pressable>
                )}
                ListEmptyComponent={() => (
                    <View className="p-10 items-center">
                        <Text className="text-gray-500">No tienes conversaciones aún.</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default MensajesScreen;