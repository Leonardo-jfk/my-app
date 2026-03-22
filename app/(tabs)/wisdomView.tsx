import { Text, View } from "react-native";
import BackgroundImage from "../../src/components/BackgroundImage";
export default function HomeScreen() {
  return (
    <BackgroundImage imageTheme="wisdom" opacity={0.8} blurRadius={2}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Test Export OK</Text>
      </View>
    </BackgroundImage>
  );
}
