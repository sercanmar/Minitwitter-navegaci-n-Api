import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { User } from '@/types/user';

interface Props {
    user: User;
    onFollow: (id: number) => void;
}

const UserCard = ({ user, onFollow }: Props) => {
    
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = () => {
        setIsFollowing(true);
        onFollow(user.id);
    };

    return (
        <View className="flex-row items-center px-4 py-3 border-b border-gray-200 bg-white justify-between">
            <View className="flex-row items-center flex-1">
                {/* Avatar */}
                <Image 
                    source={{ uri: user.avatar }} 
                    className="w-12 h-12 rounded-full bg-gray-300 mr-3"
                />
                
                {/* Textos */}
                <View className="flex-1 mr-2">
                    <Text className="font-bold text-base text-black" numberOfLines={1}>
                        {user.fullName}
                    </Text>
                    <Text className="text-gray-500 text-sm">
                        @{user.username}
                    </Text>
                </View>
            </View>

            {/* Botón Seguir */}
            <Pressable
                onPress={handleFollow}
                disabled={isFollowing}
                className={`px-4 py-1.5 rounded-full border ${
                    isFollowing 
                        ? 'bg-white border-gray-300' 
                        : 'bg-black border-black'
                }`}
            >
                <Text className={`font-bold text-sm ${
                    isFollowing ? 'text-black' : 'text-white'
                }`}>
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </Text>
            </Pressable>
        </View>
    );
};

export default UserCard;