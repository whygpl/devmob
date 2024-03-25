import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import ProductScreen from './src/screens/ProductScreen';
import AboutScreen from './src/screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Product"
                    component={ProductScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}