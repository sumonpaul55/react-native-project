import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const MovieCart = ({ id, title, poster_path, vote_average, release_date }: Movie) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image source={{
                    uri: poster_path ?
                        `https://image.tmdb.org/t/p/w500${poster_path}` :
                        "https://placeholder.co/600x600/1a1a1a/ffffff.png"
                }} className='w-full rounded-lg h-52 mb-1' resizeMode='cover' />
                <Text className='text-white text-sm font-semibold' numberOfLines={1}>{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCart