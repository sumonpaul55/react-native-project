import MovieCart from '@/components/MovieCart'
import { images } from '@/constants/images'
import { fetchMovie } from '@/services/api'
import useFetch from '@/services/useFetch'
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'

const Search = () => {
  const router = useRouter()
  const { data: movies, loading: movieLoding, error: moveisError } = useFetch(() => fetchMovie({ query: "" }));

  return (
    <View className='flex-1 items-center pt-20 bg-primary'>
      <Image source={images.bg} className="w-full h-full absolute z-0" />
      <Text className='text-white text-5xl font-bold'>Search</Text>

      <FlatList data={movies?.results}
        renderItem={({ item }) => (
          <MovieCart {...item} />
        )}
        keyExtractor={(item) => item?.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          marginBottom: 10,
          paddingRight: 5
        }}
        className="mb-2 pb-32 mt-5"
        scrollEnabled={true}
      />
    </View>
  )
}

export default Search