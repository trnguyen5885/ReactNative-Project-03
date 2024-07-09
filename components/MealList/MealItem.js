import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import MealDetail from '../MealDetail';

function MealItem({id,title, urlImage, duration, complexity, affordability}) {

    const navigation = useNavigation();

    function selectMealItemHander() {
        navigation.navigate('DetailMeal',{
            mealId: id,
        })
    }

    


  return (
    <View style = {styles.mealItem}>
        <Pressable
            onPress={selectMealItemHander}
            android_ripple={{color: '#cccccc'}}
            style={({pressed}) => pressed ? styles.pressed : null }
        >

            <View style = {styles.innerContainer}>
                <View>
                    <Image source={{uri: urlImage}} style={styles.image} />
                    <Text style = {styles.title}>{title}</Text>
                </View>
                <MealDetail duration={duration} complexity={complexity} affordability={affordability} />
            </View>
        
        </Pressable>
      
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden',

        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        shadowOpacity: 0.75
    },
    pressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 16,
    },
    
})