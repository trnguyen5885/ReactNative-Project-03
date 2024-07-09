import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoryScreen from './screens/CategoryScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import DetailMealScreen from './screens/DetailMealScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import FavouriteContextProvider from './store/context/context-favourite'
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
 return <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
 }}>
          <Drawer.Screen name='Drawer' component={CategoryScreen}  />
          <Drawer.Screen name='Favourite' component={FavouriteScreen} />
       </Drawer.Navigator>

}

export default function App() {
  return (
  <>
  
    <StatusBar style='dark' />
    {/* <FavouriteContextProvider> */}
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Category' screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        cardStyle: {backgroundColor: '#3f2f25'}
      }}>
        <Stack.Screen name ="Category" component={DrawerNavigator}
        options={{
          title: 'CategoryScreen',
          headerShown: false
          

        }}
        />
        <Stack.Screen name = "MealOverview" component={MealOverviewScreen}
        // options={({navigation, route}) => {
        //   const cateTitle= route.params.categoryTitle
        //   return {
        //     title: cateTitle
        //   }
        // }
        // }
        />
        <Stack.Screen name='DetailMeal' component={DetailMealScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    {/* </FavouriteContextProvider> */}
    
  </> );
  
}

const styles = StyleSheet.create({
  
});
