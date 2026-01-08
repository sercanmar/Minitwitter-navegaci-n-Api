import { Drawer } from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import CustomDrawer from '@/components/shared/CustomDrawer'

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white'
                }
            }}>
           <Drawer.Screen
        name="(tabs)" 
        options={{
          drawerLabel: 'Inicio',
          title: 'MiniTwitter',
          drawerIcon: ({ color, size }) => (
             <Ionicons name="home-outline" size={size} color={color} />
          )
        }}
      />
       {/*<Drawer.Screen
                name="perfil/index"
                options={{
                    drawerLabel: 'Perfil',
                    title: 'Perfil',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='person-outline' color={color} size={size} />
                    )
                }}
            />
           <Drawer.Screen
                name="guardado/index"
                options={{
                    drawerLabel: 'Guardados',
                    title: 'Guardado',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='bookmark-outline' color={color} size={size} />
                    )
                }}
            />
            <Drawer.Screen
                name="../auth/index"
                options={{
                    drawerLabel: 'Cerrar Sesión',
                    title: 'Cerrar Sesión',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='log-out-outline' color={color} size={size} />
                    )
                }}
            />
        
    */ }
       </Drawer>
       )     
}

export default DrawerLayout