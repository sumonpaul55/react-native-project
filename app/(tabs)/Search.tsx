import MovieCart from '@/components/MovieCart'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovie } from '@/services/api'
import useFetch from '@/services/useFetch'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const { data: movies, loading: movieLoding, error: moveisError } = useFetch(() => fetchMovie({ query: searchQuery }));

  return (
    <View className='flex-1 items-center pt-20 bg-primary'>
      <Image source={images.bg} className="w-full h-full absolute z-0" />
      {/* <Text className='text-white text-5xl font-bold'>Search</Text> */}

      <FlatList data={movies?.results}
        renderItem={({ item }) => (
          <MovieCart {...item} />
        )}
        keyExtractor={(item) => item?.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        className="mb-2 pb-32 mt-5"
        // scrollEnabled={true}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row items-center justify-center'>
              <Image source={icons.logo} className="size-20 mx-auto mb-5" />
            </View>
            <View className='w-full px-5 mb-5'>
              <SearchBar onPress={() => router.push("/search")} placeholder="Search For a movies..." />
            </View>
            {
              movieLoding && <ActivityIndicator size="large" color="#fff" className="my-3" />
            }
            {
              moveisError && <Text className="text-red-500 text-lg my-5">{moveisError.message}</Text>
            }
            {
              !movieLoding && !moveisError && "SEARCH TERM" &&
              (
                <Text className="text-white font-bold text-lg mb-3 mx-3">Search For Result {""}
                  <Text className='text-accesnt'>SEARCH TERM</Text>
                </Text>

              )
            }
          </>
        }
      />
    </View>
  )
}

export default Search