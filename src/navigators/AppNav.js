import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';

const AppNav = () => {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator initialRouteName='Movie'>
            <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
            <HomeStack.Screen name='Movie' component={MovieScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default AppNav;