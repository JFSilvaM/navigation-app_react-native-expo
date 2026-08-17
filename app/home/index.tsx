import CustomButton from "@/components/shared/custom-button";
import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-5"
          onPress={() => router.push("./products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          onPress={() => router.push("./products")}
          variant="text-only"
        >
          Productos
        </CustomButton>

        {/* <Link className="mb-5" href="./products">
          Products
        </Link>
        <Link className="mb-5" href="./profile">
          Profile
        </Link>
        <Link className="mb-5" href="./settings">
          Settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
