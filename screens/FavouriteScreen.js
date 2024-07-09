import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MealList from '../components/MealList/MealList'
import { MEALS } from '../data/dummy-data'
import { FavouriteContext } from '../store/context/context-favourite'
import { useSelector } from 'react-redux'

function FavouriteScreen() {

  // const favouriteMealCtx = useContext(FavouriteContext)

  const favouriteMealIds = useSelector(state => state.favouriteMeals.ids)

  const listFavouriteMeal = MEALS.filter(meal => favouriteMealIds.includes(meal.id))

  return <MealList items={listFavouriteMeal} />
}

export default FavouriteScreen

const styles = StyleSheet.create({})