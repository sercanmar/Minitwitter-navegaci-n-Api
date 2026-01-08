import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'purple',
      headerShown: false
    }}>
      <Tabs.Screen
        name="feed/index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="hashtag/index"
        options={{
          title: 'Hashtags',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="stats-chart-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="mensaje/index"
        options={{
          title: 'Mensajes',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbox-ellipses-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="usuario/index" 
        options={{
          title: 'Usuarios',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="people-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="auth/index"
        options={{
          href: null, 
        }}
      />
       <Tabs.Screen
        name="perfil/index"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="guardado/index"
        options={{
          href: null, 
        }}
      />
    </Tabs>
  )
}

export default TabsLayout