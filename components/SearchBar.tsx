import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';
interface Props {
    onPress?: () => void;
    placeholder: string;
    onChangeText: (text:string) => void;
    value: string;

}
const SearchBar = ({ onPress, placeholder, onChangeText, value }: Props) => {
    return (
        <View className='bg-dark-200 flex-row items-center px-5 py-4 rounded-full'>
            <Image source={icons.search} tintColor={"#ab8bff"} resizeMode='contain' className='size-5' />
            <TextInput
                value={value}
                placeholder={placeholder}
                placeholderTextColor={"#ab8bff"}
                onPress={onPress}
                onChangeText={onChangeText}
                className='flex-1 ml-2 text-white'
            />

        </View>
    )
}

export default SearchBar