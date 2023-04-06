import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productSlice';

const ProductScreen = ({ navigation }) => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()


    return (
        <FlatList

            data={products}
            renderItem={({ item }) => (
                <Pressable onPress={() => {

                    //update selected product
                    dispatch(productsSlice.actions.setSelectedProduct(item.id))


                    navigation.navigate('Product Details')
                }} style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </Pressable  >
            )}
            numColumns={2}
        />

    )
};

const styles = StyleSheet.create({

    image: {

        width: "100%",
        aspectRatio: 1,

    },
    itemContainer: {
        width: "50%",
        padding: 1,
    }
});

export default ProductScreen;