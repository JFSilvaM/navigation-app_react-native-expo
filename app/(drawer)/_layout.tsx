import CustomDrawer from "@/components/shared/custom-drawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: "white" },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: "Tabs",
          title: "Tabs",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="albums-outline" color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "Usuario",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="person-circle-outline" color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="calendar-outline" color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
