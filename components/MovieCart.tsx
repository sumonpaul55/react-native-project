import { icons } from '@/constants/icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const MovieCart = ({ id, title, poster_path, vote_average, release_date,  }: Movie) => {

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image source={{
                    uri: poster_path ?
                        `https://image.tmdb.org/t/p/w500${poster_path}` :
                        "https://placeholder.co/600x600/1a1a1a/ffffff.png"
                }} className='w-full rounded-lg h-40 mb-0.5' resizeMode='cover' />
                <Text className='text-white text-sm font-semibold' numberOfLines={1}>{title}</Text>
                <View className='flex-row justify-start items-center gap-x-1'>
                    <Image source={icons?.star} className='size-4' resizeMode='contain' />
                    <Text className='text-white text-xs uppercase'>{Math.round(vote_average/2)}</Text>
                </View>
                <View>
                    <Text className='text-xs text-light-300 font-medium mt-1'>
                        {release_date?.split('-')[0]}
                    </Text>
                    {/* <Text className='text-xs font-medium text-light-300 uppercase'>Movie</Text> */}
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCart