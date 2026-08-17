import CustomButton from "@/components/shared/custom-button";
import { router } from "expo-router";
import { View } from "react-native";

const HomeScreen = () => {
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
    </View>
  );
};

export default HomeScreen;
