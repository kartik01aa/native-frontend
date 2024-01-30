import { Pressable, StyleSheet,View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { ThemeProvider } from '@shopify/restyle'
import theme, { Text } from '../../utils/theme'
import { router } from 'expo-router'

const index = () => {
     return (
          <ThemeProvider theme={theme} >
               <View style={styles.container}>
                    <Text variant="textXl" >Kartik</Text>
                    <Button />
                    <Pressable onPress={()=>router.push("/sign-in/index.tsx")} ><Text>Sign in</Text></Pressable>
               </View>
          </ThemeProvider>
     )
}
const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
   });
export default index