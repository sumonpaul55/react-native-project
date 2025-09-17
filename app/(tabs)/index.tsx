import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Image source={images.bg} className="w-full h-full absolute z-0" />
      <ScrollView className="flex-1 flex-col w-full px-5" showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
          alignContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Image source={icons.logo} className="size-16 mt-20 mb-5 mx-auto" />
        <View className="mt-5 w-full">
           <SearchBar />
       </View>
      </ScrollView>
    </View>
  );
}
