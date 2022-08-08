import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import CameraScreen from '../screens/CameraScreen';


const AppNav = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName='Camera'>
            <Stack.Screen 
                name='Home' 
                component={HomeScreen}
                options={{title: 'Home'}}
            />
            <Stack.Screen 
                name='Movie' 
                component={MovieScreen}
                options={{title: 'Movie'}}
                style={{backgroundColor: '#080808'}} 

            />
            <Stack.Screen 
                name="Camera"
                component={CameraScreen}
                options={{title: 'Camera'}}
            />
        </Stack.Navigator>
    )
}

export default AppNav;