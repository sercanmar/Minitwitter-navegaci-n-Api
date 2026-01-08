import { DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'


const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      
  
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-primary font-work-black text-3xl">FH</Text>
        </View>
      </View>

    
      <DrawerItemList {...props} />


      <DrawerItem 
        label="Perfil"
        icon={({ color, size }) => (
          <Ionicons name="person-outline" size={size} color={color} />
        )}
        onPress={() => {
      
          router.push('/perfil');
        }}
      />

      <DrawerItem 
        label="Guardados"
        icon={({ color, size }) => (
          <Ionicons name="bookmark-outline" size={size} color={color} />
        )}
        onPress={() => {
          router.push('/guardado');
        }}
      />

      <DrawerItem 
        label="Cerrar Sesión"
        icon={({ color, size }) => (
            <Ionicons name="log-out-outline" size={size} color={color} />
        )}
        onPress={() => {
  
            router.replace('/auth');
        }}
      />

    </DrawerContentScrollView>
  )
}

export default CustomDrawer
