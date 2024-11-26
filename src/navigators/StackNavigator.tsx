import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from "../screens/home/Homepage";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";

function StackNavigator() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SignUp"
                screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                    gestureEnabled: true
                })}
            >
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="Home" component={Homepage}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;