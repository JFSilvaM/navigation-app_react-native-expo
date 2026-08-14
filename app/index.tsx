import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl font-work-black text-secondary-100">App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
