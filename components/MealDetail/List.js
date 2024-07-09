import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function List({data}) {
  return data.map((dataPoint) =>
        <View  style = {styles.listItem} key={dataPoint} >
            <Text style = {styles.textItem}>
            {dataPoint}
            </Text>
        </View>

    )
}

export default List

const styles = StyleSheet.create({
    listItem: {
        margin: 4,
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 4,
        backgroundColor: '#e2b497',
    },
    textItem: {
        fontSize: 14,
        textAlign: 'center',
        color: '#35140',
    }
})