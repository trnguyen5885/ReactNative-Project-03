import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

function IconButton({name, color, onPress}) {
  return (
    <Pressable 
    style = {({pressed}) => pressed && styles.pressed}
    onPress={onPress}>
        <Ionicons name={name} color={color} size = {24} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  }
})