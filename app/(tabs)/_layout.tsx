import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'


const TabIcons = ({ icon, focused, text }: any) => {
    if (focused) {
        return <ImageBackground source={images.highlight} className='w-full min-w-[112px] flex flex-row min-h-14 justify-center items-center mt-4 gap-2 rounded-full overflow-hidden'>
            <Image source={icon} tintColor={"#151312"} className='size-5' />
            <Text className='text-secondary text-base'>{text}</Text>
        </ImageBackground>
    } else {
       return <View>
            <Image source={icon} tintColor={"#151312"} className='size-5' />
        </View>
    }
}

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcons icon={icons.home} text="Home" focused={focused} />
                    )
                }}
            />
            <Tabs.Screen
                name='Search'
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcons icon={icons.search} text="Search" focused={focused} />
                    )
                }}
            />
            <Tabs.Screen
                name='Saved'
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcons icon={icons.save} text="Saved" focused={focused} />
                    )
                }}
            />
            <Tabs.Screen
                name='Profile'
                options={{
                    title: "Profiles",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcons icon={icons.person} text="Profile" focused={focused} />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout