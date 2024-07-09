import { View, Text, Pressable, StyleSheet, Platform} from 'react-native'
import React from 'react'

function CategoryGridTile({title, color, onPress}) {
  return (
    <View style = {styles.gridItem}>
        <Pressable 
        onPress={onPress}
        android_ripple={{color: '#cccccc'}}
        style = {({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
            <View style = {[styles.innerContainer, {backgroundColor: color}]}>
                <Text style = {styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.75
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default CategoryGridTile;