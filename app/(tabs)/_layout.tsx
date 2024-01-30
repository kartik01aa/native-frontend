import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
     <Tabs.Screen name='index' options={{headerTitle:"Home"}} />
     <Tabs.Screen name="sign-in/index" options={{headerTitle:"Sign In"}} />
    </Tabs>
  )
}

export default TabsLayout
