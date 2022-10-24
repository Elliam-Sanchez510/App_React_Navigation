import { ScrollView, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
    return (
        <ScrollView>
            <View style={style.container}>
                <Text style={style.perfil}>
                    Mi perfil
                </Text>
                <View style={style.punto}>
                    <MaterialCommunityIcons name="dots-horizontal" size={28} color="black" />
                </View>
            </View>

            <View>
                <View style={style.container2}>
                    <Image
                        style={style.img}
                        source={{
                            uri: "https://3.bp.blogspot.com/-0ghCZwUvxHA/XLjDuJ6BK0I/AAAAAAAAId4/RTO2ACi9kaEAcqUv4iweD5plCh8nHh0RgCLcBGAs/s1600/fotos%2Btumblr.jpg"
                        }}
                    />
                    <TouchableOpacity>
                        <Text style={style.button1}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={style.text}>
                        Michell Luna
                    </Text>
                </View>
                <View>
                    <Text style={style.text1}>
                        Hello world I'm Michelle Luna, I'm from
                    </Text>
                    <Text style={style.text2}>
                        Nicaragua, I love cooking so much!
                    </Text>
                </View>
            </View>

            <View style={style.container3}>
                <View>
                    <Text style={style.recipe}>
                        Recipe
                    </Text>
                    <Text style={style.numero}>
                        3
                    </Text>
                </View>
                <View>
                    <Text style={style.recipe}>
                        Videos
                    </Text>
                    <Text style={style.numero}>
                        13
                    </Text>
                </View>
                <View>
                    <Text style={style.recipe}>
                        Followers
                    </Text>
                    <Text style={style.numero}>
                        14K
                    </Text>
                </View>
                <View>
                    <Text style={style.recipe}>
                        Following
                    </Text>
                    <Text style={style.numero}>
                        120
                    </Text>
                </View>
            </View>

        </ScrollView>
    )
}

const style = StyleSheet.create({
    perfil: {
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    punto: {
        left: -15
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 15,
    },
    button1: {
        fontSize: 15,
        color: "red",
        margin: 30,
        padding: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "red",
        backgroundColor: 'white',
        fontWeight: "bold",
    },

    container2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 20,
    },
    text1: {
        fontSize: 15,
        left: 20,
        marginTop: 15,
        color: 'gray'
    },
    text2: {
        fontSize: 15,
        left: 20,
        color: 'gray'
    },
    recipe: {
        color: 'gray',

    },
    numero: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 15
    },
    container3: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingBottom: 30,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around'
    },
    Container1: {
        flexDirection: 'row',
        margin: 15,
        alignItems: 'center',
    },
})

export default Profile;