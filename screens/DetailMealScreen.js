import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavouriteContext } from '../store/context/context-favourite'
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/redux/favourites'
function DetailMealScreen({route, navigation}) {

  // const favouriteMealCtx = useContext(FavouriteContext);

  const favouriteMealds =  useSelector((state) => state.favouriteMeals.ids);
  
  const dispatch =  useDispatch();

  const mealId = route.params.mealId;

  const mealIsFavourite = favouriteMealds.includes(mealId);

  function changeFavouriteStatusHandler() {
    if(mealIsFavourite) {
      // favouriteMealCtx.removeFavourite(mealId)
      dispatch(removeFavourite({id: mealId}))
    } else {
      // favouriteMealCtx.addFavourite(mealId)
      dispatch(addFavourite({id: mealId }))
    }
  }
  
  useEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return <IconButton name = {mealIsFavourite ? 'star' : 'star-outline'} 
        color = 'white' 
        onPress={changeFavouriteStatusHandler} />
      }
    },
   
    
    )
  }, [mealId, navigation,changeFavouriteStatusHandler])
  

  

  

  const selectMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <ScrollView style = {styles.container}>
        <Image style={styles.image} source={{uri: selectMeal.imageUrl}} />
        <Text style={styles.title}>{selectMeal.title}</Text>

        <MealDetail 
          textStyle={styles.detailText}
          duration={selectMeal.duration}
          complexity={selectMeal.complexity}
          affordability={selectMeal.affordability} />

        <View style = {styles.listContainer}>
          <View style = {styles.listInnerContainer}>
            <Subtitle>Ingredient</Subtitle>
            <List data={selectMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectMeal.steps} />



          </View>
        </View>
          
        
          
          
          
    </ScrollView>
  )
}

export default DetailMealScreen

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 250
  },
  title: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white' 
  }, 
  detailText: {
    color: 'white'
  },
  listContainer: {
    alignItems: 'center'
  },
  listInnerContainer: {
    width: '80%'
  }
  
})