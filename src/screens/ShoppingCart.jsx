import { FlatList, View, StyleSheet, Pressable } from "react-native"
import { Text } from "react-native"
import cart from "../data/cart"
import CartListItem from "../components/CartListItem"

const shopingCartTotal = () => (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>
                Subtotal
            </Text>
            <Text style={styles.text}>
                $400 usd
            </Text>

        </View>
        <View style={styles.row}>
            <Text style={styles.text}>
                Delivery
            </Text>
            <Text style={styles.text}>
                $400 usd
            </Text>

        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}>
                Total
            </Text>
            <Text style={styles.text}>
                $800 usd
            </Text>

        </View>
    </View>
)
const ShoppingCart = () => {
    return (
        <>
            <FlatList data={cart} renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={
                    shopingCartTotal
                }
            />
            <Pressable style={styles.button}>
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

    }
})

export default ShoppingCart