import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Favorites = () => {
    return (
        <ScrollView>

            <View>
                <Text style={styles.SaveRecipes}>Recetas guardadas</Text>

                <View style={styles.TextVideo}>
                    <Text style={styles.TextVideo1}>
                        Video
                    </Text>
                    <Text style={styles.TextRecipe}>
                        Recipe
                    </Text>
                </View>

                <View style={styles.Ima}>
                    <Image
                        style={styles.Image}
                        source={require('../Image/Imagen1.jpg')}
                    />
                    <View style={styles.Hexagram}>
                        <MaterialCommunityIcons
                            name="hexagram"
                            style={styles.Hexagram1}
                        />
                        <View style={styles.BookOutline}>
                            <MaterialCommunityIcons
                                name="book-outline"
                                style={styles.BookOutline1}
                            />
                        </View>
                        <Text style={styles.Hexagram1}>
                            5,0
                        </Text>
                        

                    </View>
                </View>

                <View style={styles.Description}>
                    <Text style={styles.Description1}>Como hacer una tostada</Text>
                    <MaterialCommunityIcons
                        name="dots-horizontal"
                        style={styles.DotsHorizontal}
                    />
                </View>

                <View style={styles.Images}>
                    <Image
                        style={styles.Images1}
                        source={{
                            uri: "https://st3.depositphotos.com/28476324/31821/i/600/depositphotos_318216690-stock-photo-sexy-stylish-brunette-woman-in.jpg"
                        }}
                    />
                    <Text style={styles.Users}>By Roberta Anny</Text>
                </View>

                <View style={styles.Ima}>
                    <Image
                        style={styles.Image}
                        source={require('../Image/Imagen2.jpg')}
                    />
                    <View style={styles.Hexagram}>
                        <MaterialCommunityIcons
                            name="hexagram"
                            style={styles.Hexagram1}
                        />
                        <Text style={styles.Hexagram1}>
                            4,5
                        </Text>
                    </View>
                </View>

                <View style={styles.Description}>
                    <Text style={styles.Description1}>How to make sushi at home</Text>
                    <MaterialCommunityIcons
                        name="dots-horizontal"
                        style={styles.DotsHorizontal}
                    />
                </View>

                <View style={styles.Images}>
                    <Image
                        style={styles.Images1}
                        source={{
                            uri: "https://st2.depositphotos.com/20363444/i/600/depositphotos_442183986-stock-photo-stylish-woman-headscarf-adjusting-sunglasses.jpg"
                        }}
                    />
                    <Text style={styles.Users}>By Nicki Samantha</Text>
                </View>

                <View style={styles.Ima}>
                    <Image
                        style={styles.Image}
                        source={require('../Image/Imagen3.jpeg')}
                    />
                    <View style={styles.Hexagram}>
                        <MaterialCommunityIcons
                            name="hexagram"
                            style={styles.Hexagram1}
                        />
                        <Text style={styles.Hexagram1}>
                            4,9
                        </Text>
                    </View>
                </View>

                <View style={styles.Description}>
                    <Text style={styles.Description1}>How to make sushi at home</Text>
                    <MaterialCommunityIcons
                        name="dots-horizontal"
                        style={styles.DotsHorizontal}
                    />
                </View>

                <View style={styles.Images}>
                    <Image
                        style={styles.Images1}
                        source={{
                            uri: "https://img.freepik.com/foto-gratis/retrato-modelo-sonriente-hermoso-hombre-negocios-inconformista-que-lleva-ropa-blanca-casual-verano_158538-919.jpg?w=2000"
                        }}
                    />
                    <Text style={styles.Users}>By James Wolden</Text>
                </View>
            </View>

        </ScrollView>
    )
}
export default Favorites;

const styles = StyleSheet.create({
    Container: {

    },
    SaveRecipes: {
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: 20,
        margin: 15,
    },
    TextVideo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#E23E3E',
        height: 35,
        width: 90,
        borderRadius: 10,
        marginStart: 20,
        margin: 13,
    },
    TextVideo1: {
        color: 'white',
        fontSize: 15,
        padding: 5,
        textAlign: 'center',
    },
    TextRecipe: {
        color: '#EE8B8B',
        fontSize: 15,
        marginLeft: 100,
        padding: 5,
    },
    Video: {
        margin: 10,
    },
    Hexagram: {
        flexDirection: 'row',
        backgroundColor: '#2C3D5A',
        position: 'absolute',
        borderRadius: 8,
        height: 20,
        width: 50,
        margin: 10,
        marginStart: 25,
    },
    Hexagram1: {
        fontSize: 15,
        color: 'white',
    },
    BookOutline: {
        flex: 1,
        backgroundColor: '#ffff',
        borderRadius: 15,
        height: 16,
        width: 60,
    },
    BookOutline1: {
        color: '#E65656',
        fontSize: 12,
    },
    Ima: {
        marginStart: 20,
    },
    Image: {
        width: '90%',
        height: 190,
        borderRadius: 8,
        margin: 5,
    },
    Description: {
        flexDirection: 'row',
        flex: 1,
    },
    Description1: {
        paddingStart: 20,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#white'
    },
    DotsHorizontal: {
        padding: 5,
    },
    Images: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    Images1: {
        width: 35,
        height: 35,
        borderRadius: 35,
        margin: 5,
    },
    Users: {
        fontSize: 10,
        color: '#ACACAC',
    }
})