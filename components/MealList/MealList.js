import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import MealItem from './MealItem';

function MealList({items}) {
    function renderItemMeals(itemData) {
        const item = itemData.item;
  
        const mealItemProps = {
          id: item.id,
          title: item.title,
          urlImage: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        }
  
      return <MealItem {...mealItemProps}/>
    }
  
    return (
    
      <FlatList data={items}
       keyExtractor={(item) => item.id }
        renderItem={renderItemMeals}
      />
    
    )
}

export default MealList

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})