import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import React from 'react';
import CategoryGridTile from '../components/CategoryGridTile';





function CategoryScreen({navigation}) {

  function renderCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate('MealOverview', {
        catogoryId: itemData.item.id,
        categoryTitle: itemData.item.title
      })
    }
      return <CategoryGridTile title={itemData.item.title} color = {itemData.item.color} onPress={pressHandler} />
  }



  return (
  <FlatList data={CATEGORIES}
   keyExtractor={(item) => item.id } 
   renderItem = {renderCategoryItem}
   numColumns={2}
   />
  );
}

export default CategoryScreen;