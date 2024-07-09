import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Subtitle({children}) {
  return (
    <View style = {styles.subTitleContainer}>
            <Text style = {styles.subTitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subTitleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497',
        padding: 6,
        marginHorizontal: 6,
        marginVertical: 4,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e2b497',
        textAlign: 'center',
    }
})