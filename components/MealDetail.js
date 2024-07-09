import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function MealDetail({duration, complexity,affordability, style, textStyle}) {
  return (
    <View style = {[styles.detailMeal, style]}>
         <Text style = {[styles.detailItemMeal, textStyle]}>{duration}m</Text>
         <Text style = {[styles.detailItemMeal, textStyle]}>{complexity.toUpperCase()}</Text>
         <Text style = {[styles.detailItemMeal, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetail

const styles = StyleSheet.create({
    detailMeal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
    detailItemMeal: {
        fontSize: 12,
        marginHorizontal: 12,

    }
})