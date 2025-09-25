import MovieCart from "@/components/MovieCart";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovie } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter()
  const { data: movies, loading: movieLoding, error: moveisError } = useFetch(() => fetchMovie({ query: "" }))
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
        {
          movieLoding ? <ActivityIndicator size="large" color="#fff" className="my-5" /> :
            moveisError ? <Text className="text-white text-lg my-5">{moveisError.message}</Text> :
              <View className="mt-5 w-full px-2">
                <SearchBar onPress={() => router.push("/search")} placeholder="Search For a movie" />
                <>
                  <Text className="text-white font-bold my-3">Latest Movies</Text>
                  <FlatList
                    data={movies?.results}
                    renderItem={({ item }) => (
                      <MovieCart {...item} />
                    )}
                    keyExtractor={({ item }) => item?.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{
                      justifyContent: "flex-start",
                      gap: 20,
                      marginBottom: 10,
                      paddingRight: 5
                    }}
                    className="mb-2 pb-32"
                    scrollEnabled={false}
                  />
                </>
              </View>
        }

      </ScrollView>
    </View>
  );
}
