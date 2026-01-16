import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUsers } from '../../../../../hooks/useUsers';
import UserCard from '@/components/user/UserCard';

const UsuarioScreen = () => {
    const { usersQuery, followUser } = useUsers();

    if (usersQuery.isLoading) {
        return (
            <View className="flex-1 justify-center items-center bg-quaternary">
                <ActivityIndicator size="large" color="#1DA1F2" />
            </View>
        );
    }

    if (usersQuery.isError) {
        return (
            <View className="flex-1 justify-center items-center bg-quaternary">
                <Text className="text-red-500">Error al cargar usuarios</Text>
            </View>
        );
    }

    return (
        <SafeAreaView edges={['top']} className="flex-1 bg-quaternary">
            <View className="px-4 py-2 border-b border-gray-200 bg-white">
                <Text className="font-bold text-xl">A quién seguir</Text>
            </View>

            <FlatList
                data={usersQuery.data ?? []}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <UserCard 
                        user={item} 
                        onFollow={(id) => followUser(id)}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </SafeAreaView>
    );
};

export default UsuarioScreen;