import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

const SearchBar = () => {
    return (
        <View className='bg-dark-200 flex-row items-center px-5 py-4 rounded-full'>
            <Image source={icons.search} tintColor={"#ab8bff"} resizeMode='contain' className='size-5' />
            <TextInput
                value=''
                placeholder='Search'
                placeholderTextColor={"#ab8bff"}
                onPress={()=>{}}
                onChangeText={() => { }}
                className='flex-1 ml-2 text-white'
                
            />
        </View>
    )
}

export default SearchBar