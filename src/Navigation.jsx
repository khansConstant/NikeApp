import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductDetailsScreen from "./screens/ProductDetailsScreen"
import ProductScreen from "./screens/ProductScreen"
import ShoppingCart from "./screens/ShoppingCart"
import CartListItem from "./components/CartListItem"


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={ProductScreen} />
                <Stack.Screen name="Product Details" component={ProductDetailsScreen} options={{ presentation: "modal" }} />
                <Stack.Screen name="Cart" component={ShoppingCart} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation