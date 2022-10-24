import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const Favorites = () => {
    return (
        <ScrollView>

            <View>
                <Text style={styles.SaveRecipes}>Recetas guardadas</Text>

                <View style={styles.Container1}>

                    <TouchableOpacity style={styles.TextVideo}>

                        <Text style={styles.TextVideo1}>
                            Video
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.TextRecipe}>
                            Recipe
                        </Text>
                    </TouchableOpacity>
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
                        <Text style={styles.Hexagram1}>
                            5,0
                        </Text>
                        <View style={styles.BookOutline}>
                            <MaterialCommunityIcons
                                name="bookmark-minus-outline"
                                style={styles.BookOutline1}
                            />
                        </View>

                        <View style={styles.Reproduct}>
                            <AntDesign
                                name="caretright"
                                style={styles.Reproduce}
                            />
                        </View>

                        <View style={styles.Time}>
                            <Text style={styles.Time1}>
                                15:10
                            </Text>

                        </View>
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
                        <View style={styles.BookOutline}>
                            <MaterialCommunityIcons
                                name="bookmark-minus-outline"
                                style={styles.BookOutline1}
                            />
                        </View>

                        <View style={styles.Reproduct}>
                            <AntDesign
                                name="caretright"
                                style={styles.Reproduce}
                            />
                        </View>

                        <View style={styles.Time}>
                            <Text style={styles.Time1}>
                                15:10
                            </Text>

                        </View>
                    </View>
                </View>

                <View style={styles.Description}>
                    <Text style={styles.Description1}>How to make sushi at home</Text>
                    <MaterialCommunityIcons
                        name="dots-horizontal"
                        style={styles.DotsHorizontal1}
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
                        
                        <View style={styles.BookOutline}>
                            <MaterialCommunityIcons
                                name="bookmark-minus-outline"
                                style={styles.BookOutline1}
                            />
                        </View>

                        <View style={styles.Reproduct}>
                            <AntDesign
                                name="caretright"
                                style={styles.Reproduce}
                            />
                        </View>

                        <View style={styles.Time}>
                            <Text style={styles.Time1}>
                                15:10
                            </Text>

                        </View>
                    </View>
                </View>

                <View style={styles.Description}>
                    <Text style={styles.Description1}>How to make sushi at home</Text>
                    <MaterialCommunityIcons
                        name="dots-horizontal"
                        style={styles.DotsHorizontal2}
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
    Container1: {
        flexDirection: 'row',
        margin: 15,
        alignItems: 'center',
    },
    SaveRecipes: {
        fontSize: 25,
        fontWeight: 'bold',
        marginStart: 20,
    },
    TextVideo: {
        backgroundColor: '#E23E3E',
        height: 35,
        width: 150,
        borderRadius: 10,
        margin: 13,
    },
    TextVideo1: {
        color: 'white',
        fontSize: 15,
        padding: 5,
        left: 50,

    },
    TextRecipe: {
        color: '#EE8B8B',
        fontSize: 15,
        marginLeft: 100,
        left: -40
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
        left: 240,
        backgroundColor: 'white',
        height: 35,
        width: 34,
        borderRadius: 20,

    },
    BookOutline1: {
        left: 5,
        color: '#E65656',
        fontSize: 24,
        top: 4
    },
    Reproduct: {
        backgroundColor: '#2C3D5A',
        left: 55,
        top: 60,
        height: 50,
        width: 50,
        borderRadius: 50
    },
    Reproduce: {
        fontSize: 30,
        color: 'white',
        top: 10,
        left: 10
    },
    Time: {
        backgroundColor: '#2C3D5A',
        left: 140,
        top: 150,
        width: 45,
        height: 25,
        borderRadius: 50,
    },
    Time1: {
        left: 4,
        top: 2,
        color: 'white',
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
        paddingStart: 25,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#white'
    },
    DotsHorizontal: {
        fontSize: 28,
        marginLeft: '37%',

    },
    DotsHorizontal1: {
        fontSize: 28,
        marginLeft: '31%',

    },
    DotsHorizontal2: {
        fontSize: 28,
        marginLeft: '31%',

    },
    Images: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    Images1: {
        margin: 13,
        width: 60,
        height: 60,
        borderRadius: 30
    },
    Users: {
        fontSize: 15,
        color: '#ACACAC',
    }
})