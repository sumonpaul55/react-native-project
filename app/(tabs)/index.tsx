import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">

      <Image source={images.bg} className="absolute h-full left-0 top-0" />
      <ScrollView>
        <View>
          
        </View>
      </ScrollView>
    </View>
  );
}
