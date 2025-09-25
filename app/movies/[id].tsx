import React from 'react'
import { ScrollView, Text } from 'react-native'

const MovieDetails = () => {
  return (
    <ScrollView className="flex-1 flex-col w-full px-5" showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        minHeight: "100%",
        paddingBottom: 20,
        paddingTop: 50,
        alignContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >  <Text className='text-3xl font-semibold'>Movie Details page</Text>
    </ScrollView>
  )
}

export default MovieDetails