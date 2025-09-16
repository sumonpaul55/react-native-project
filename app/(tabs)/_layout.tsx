import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: "Home",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name='Search'
                options={{
                    title: "Search",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name='Saved'
                options={{
                    title: "Saved",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name='Profile'
                options={{
                    title: "Profiles",
                    headerShown: false
                }}
            />
        </Tabs>
    )
}

export default _layout