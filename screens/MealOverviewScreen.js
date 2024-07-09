
import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data'
import React, { useEffect, useLayoutEffect } from 'react'
import MealList from '../components/MealList/MealList';

function MealOverviewScreen({route, navigation}) {

  const categoryId = route.params.catogoryId;

  

  

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title
    navigation.setOptions({
      title: categoryTitle,
    })
  },[categoryId, navigation])

  


  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0
  })

  return <MealList items={displayedMeals}  />
}

export default MealOverviewScreen

