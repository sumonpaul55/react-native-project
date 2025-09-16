import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 py-10 items-center">
      <Text className="font-semibold text-accesnt text-5xl">Welcome!</Text>
      <Text>I&apos;m Software for Mobile (android and ios)</Text>
      <Text className="text-xl mt-5 font-bold text-dark-200">Hello everyone</Text>
      <Text className="mt-10 font-bold px-4 text-indigo-800">this is Sumon Chandra Paul from Mobile Application</Text>
      <Link href="/onboard" className="mt-4 bg-primary text-white px-3 py-2 rounded-lg">
        <Text>Onborading</Text>
      </Link>
    </View>
  );
}
