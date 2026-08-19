import CustomButton from "@/components/shared/custom-button";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer);

  return (
    <View className="px-10 gap-2">
      <CustomButton onPress={() => router.push("./products")}>
        Productos
      </CustomButton>

      <CustomButton onPress={() => router.push("./profile")} color="secondary">
        Perfil
      </CustomButton>

      <CustomButton onPress={() => router.push("./settings")} color="tertiary">
        Ajustes
      </CustomButton>

      <Link href="./products" asChild>
        <CustomButton variant="text-only" color="primary">
          Productos
        </CustomButton>
      </Link>

      <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>
    </View>
  );
};

export default HomeScreen;
