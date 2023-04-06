import { FlatList, View, StyleSheet, Pressable } from "react-native"
import { Text } from "react-native"
import cart from "../data/cart"
import CartListItem from "../components/CartListItem"
import { useSelector } from "react-redux"
import { selectDeliveryPrice, selectSubtotal, selectTotal, selectNumberOfItems } from "../store/cartSlice"



const shopingCartTotal = () => {
    const subTotal = useSelector(selectSubtotal)
    const deliveryFee = useSelector(selectDeliveryPrice)
    const total = useSelector(selectTotal)
    const cartLength = useSelector(selectNumberOfItems);

    return (
        <>
            {
                cartLength === 0 ? (
                    <View style={styles.empty}>
                        <Text style={styles.emptyText}>Cart is empty</Text>
                    </View>
                ) : (
                    <View style={styles.totalsContainer}>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Subtotal
                            </Text>
                            <Text style={styles.text}>
                                {subTotal} $ usd
                            </Text>

                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>
                                Delivery
                            </Text>
                            <Text style={styles.text}>
                                ${deliveryFee} usd
                            </Text>

                        </View>
                        <View style={styles.row}>
                            <Text style={styles.textBold}>
                                Total
                            </Text>
                            <Text style={styles.text}>
                                ${total} usd
                            </Text>

                        </View>
                    </View >
                )
            }
        </>

    )
}


const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items)
    return (
        <>
            <FlatList data={cartItems} renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={
                    shopingCartTotal
                }
            />
            <Pressable onCl style={styles.button}>
                <Text style={styles.buttonText}>
                    Checkout
                </Text>
            </Pressable>
        </>

    );
}

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: "gainsboro",
        borderTopWidth: 1,

    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 2

    },
    text: {
        fontSize: 16,
        color: "gray"
    },
    textBold: {
        fontSize: 16,
        color: "black",
        fontWeight: '500',

    },
    button: {
        position: 'absolute',
        backgroundColor: "black",
        bottom: 30,
        width: "90%",
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",

    },
    buttonText: {
        color: "white",
        fontWeight: '500',
        fontSize: 16,

    },
    empty: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    emptyText: {
        fontSize: 24,
        fontWeight: 400,
        color: "gray"
    }
})

export default ShoppingCart