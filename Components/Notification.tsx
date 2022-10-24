import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Notification = () => {
    return (
        <ScrollView>
            <View style={style.flecha}>
                <AntDesign name="arrowleft" style={style.icon} />
                <View style={style.flecha1}>
                    <MaterialCommunityIcons name="dots-horizontal" size={28} color="black" />
                </View>

            </View>
            <View >
                <Text style={style.tittle}>
                    Como hacer una tostada
                </Text>
            </View>
            <View>
                <Image
                    style={style.img}
                    source={{
                        uri: "https://www.tuhogar.com/content/dam/cp-sites/home-care/tu-hogar/es_mx/recetas/comidas-faciles-y-rapidas/aprende-a-preparar-tostadas-mexicanas/cuatro-recetas-para-preparar-tostadas-mexicanas-axion.jpg"
                    }}
                />
            </View>
            <View>
                <View style={style.strella}>
                    <AntDesign name="star" size={24} color="orange" />
                    <Text style={style.text}>
                        4,5
                    </Text>
                    <Text style={style.text1}>
                        (300 Reviews)
                    </Text>
                </View>
            </View>

            <View style={style.photo}>
                <View style={style.roberta}>
                    <Image
                        style={style.img2}
                        source={{
                            uri: "https://p1.pxfuel.com/preview/806/521/259/girl-portraip-long-hair-profile.jpg"
                        }}
                    />
                    <View style={style.texts}>
                        <Text style={style.text2}>
                            Roberta Anny
                        </Text>
                        <Text style={style.locate}>
                            <Entypo name="location-pin" size={24} color="red" />
                            Bali, indonesia
                        </Text>
                    </View>

                </View>
                <TouchableOpacity>
                    <Text style={style.button}>
                        Follow
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={style.container}>
                <Text style={style.tittle}>
                    Ingredients
                </Text>
                <Text style={style.tittle1}>
                    5 itemns
                </Text>
            </View>
            <View style={style.ingredientes}>
                <Image
                    style={style.img3}
                    source={{
                        uri: "data:image/png;base64,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"
                    }}
                />
                <View style={style.ingre}>
                    <Text style={style.ingredientes2}>
                        Bread
                    </Text>
                    <Text style={style.cantidad}>
                        200 G
                    </Text>
                </View>

            </View>
            <View style={style.ingredientes}>
                <Image
                    style={style.img3}
                    source={{
                        uri: "https://www.iconbunny.com/icons/media/catalog/product/3/7/3769.13-eggs-icon-iconbunny.jpg"
                    }}
                />
                <View style={style.ingre}>
                    <Text style={style.ingredientes2}>
                        Eggs
                    </Text>
                    <Text style={style.cantidad}>
                        200 G
                    </Text>
                </View>
            </View>
            <View style={style.ingredientes}>
                <Image
                    style={style.img3}
                    source={{
                        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAqFBMVEX///9Hk8f19fVqp9NES1O2uLr8/Pw1PUZER0zd3t9DRUk3PUVsq9lNYnNGdJdGj8Dr6+tHlsxFXnNuc3hnbHI5cJc8QUdGe6FYfJg+fal4fIF+g4c+Y3+8vLu/wMKTlJfQ0NBSf6CrrrBKUVmipKdcY2mbnZ4uN0Hh4uPv7/BLZnxXXWRCVWUlLzpPVVxkmL5mncVZiq5OcoxhkbRBWW3Jy82JjJFEUl//J354AAAE5klEQVR4nO3dC0+rSBjG8S4OvL3oLrvF0W2VItoC1qrn0vb7f7OdGai9SBMMk7yD+/yTc1RKk/5CmQEU7fUQQgghhBBCCCGEEEIIIYQQQizFvo1Cbsb54hVlrSLTnNtxPp9eJ60aR1E0F04LJ72gRb3B/X28cHsbjgOvTYl/fw8haxBC2AVh+7HUdeHrtFWTKBo7PR+m1Jft6quE4Hacbyyfb9v1rBKZuwem2fDtsl0Pqi3F3JBzJSQu2nX5Qwmv5Ixbcq7F6PmyJfGXEj7LiFtyrrl8aAm8eFfC2z553JT6vGz43lZ4oXdEQQNuS31remz7Ji2F21HKbalvI3+2Fpqh5llOuS31LeWP9tvwTQl/9pfcltrCbNjaVw41D31ycs73adt+E5Y74iOtuTV1TS3shqpyzl9wa2oKHoe/LAAdnvMHWd8GsBpqhINzfjq6svEmdXjOj+StPeGWfG7PpzwxfLMCvCjn/A036FPtz5x2lTviKzfoUxbOnKreyx2x4BadtpQPloTVnJ9wi04qyMKZ04HwZfTETTppTVtbwGqoGXOTTrJx5rSrHGqIm3SSGFo4c6qqhpqc23RUqA7ZWl5HdPySYkriyl4vqkfH5vxI9If2Ki/tu3V6EfXv/rTXnep3363BNBre/G2vf6+vr+8cFP5hLQg5ghBCCPmDEEII+YMQQgj5gxBCCPmDEEII+YPwS7l5vVTe/GUvI3TsG4iR6FtOCNeEkuylb7xwTkh+EVprnfr+jBwTZnG7W7oOC/T9Xd9a6EHIEYQQQsgfhN9IWN6xvHup+68+lh48ul/n6IvAaWHgP+nW5estzBeLvFqeqEWDOI6TI2C1hvk8MesXTgvH5tC5uis/Wenj8VVSLs/SwAvSFWWTw63YE+Ua+skD/dyV7/RRWzARpqLcPKQ/p4EWqo++FpKQ0yPho3qkFIZm7dTxd2kpLF9yEImvCIulXvkpcHuk2Qn16/QK8SXhWJ0T0ixwfCw1QrUtIvNCyXzeTBhM1dpUPuS8cKM2Rljuhq+bhsLeTAHlboRyXChjEqTmi57aDScz2UiofwRXyKha5rqQ8pHZEQuFS5sJB+tMbfu51xVhGJkdca02ZdJMmErRLaGeB0MzGxabJkIhD0bgLghzvfXWejeMes2Emqf+ZXlXhKEUchFk6r/GQpno/6NeR4Q9PSMOzIZsKKxGU4o7MR9SHqjxRegxJgyaCWmtFi0/Dmg7IIzNIbeYB82E+hHPPIk2XThqo9zLzeAoZ02F+wN1Sjpw5K2EgXnHqb2qVrjZ/8azo7OnwW7a74JQH5qKLPTqhGL+9FFxKAymspwUuyA0O+LSqxcKqn51GVF4KPRCvRHVbuy0cGyEXq4PpNWoUS/cdywMFuYEo+e2kGilj0xeiTIt2mQn12myo++FhofXaVTmuk7sstAL8zw/91HPdUV+lFqSV498PD0PnRbayOn90E4QcgQhhBDyByGEEPIHIYRHuXnkTWk+sFUep2m6cU0oRhZ/Rljn3M8IC/s5JpQ31m5GwP0WPOGeGQgh5A9CCCHkD0IIIeQPQggh5A9CCCHkD0IIIeQPQggh5A9CCCHkD0IIIeQPwm8glN/9ryFt5PYfe/1+eXnZjtz6q2Qh0chu5Nqf6fRi325xwE1CCCGEEEIIIYQQQgghhBBC6H/Xf4GXb4crLIUiAAAAAElFTkSuQmCC"
                    }}
                />
                <View style={style.ingre1}>
                    <Text style={style.ingredientes2}>
                        Milk
                    </Text>
                    <Text style={style.cantidad1}>
                        200 G
                    </Text>
                </View>
            </View>
            <View style={style.ingredientes}>
                <Image
                    style={style.img3}
                    source={{
                        uri: "https://img.freepik.com/free-vector/bar-butter-with-butter-slice-sticker-white-background_1308-64643.jpg"
                    }}
                />
                <View style={style.ingre}>
                    <Text style={style.ingredientes2}>
                        Butter
                    </Text>
                    <Text style={style.cantidad}>
                        200 G
                    </Text>
                </View>
            </View>
            <View style={style.ingredientes}>
                <Image
                    style={style.img3}
                    source={{
                        uri: "data:image/jpeg;base64,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"
                    }}
                />
                <View style={style.ingre}>
                    <Text style={style.ingredientes2}>
                        Butter
                    </Text>
                    <Text style={style.cantidad}>
                        200 G
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    flecha: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

    flecha1: {
        left: -18
    },

    icon: {
        margin: 10,
        fontSize: 30
    },

    tittle: {
        fontWeight: "bold",
        fontSize: 30,
        margin: 15
    },

    img: {
        alignItems: 'center',
        margin: 20,
        width: 350,
        height: 200,
        borderRadius: 20
    },

    strella: {
        flexDirection: 'row',
        marginLeft: 22
    },

    text: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 18

    },

    text1: {
        fontSize: 18,
        marginLeft: 8,
        color: 'gray'
    },

    photo: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    img2: {
        alignItems: 'center',
        margin: 20,
        width: 60,
        height: 60,
        borderRadius: 30
    },

    text2: {
        fontWeight: 'bold',
        flexDirection: 'column',
        fontSize: 20,
    },

    locate: {
        fontSize: 15,
        color: 'gray',
    },

    roberta: {
        flexDirection: 'row',
    },


    button: {
        fontSize: 15,
        color: "white",
        margin: 30,
        padding: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "red",
        backgroundColor: 'red',
        fontWeight: "bold",
    },

    tittle1: {
        flexDirection: 'row',
        color: 'gray',
        left: -20
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    ingredientes: {
        backgroundColor: 'azure',
        flexDirection: 'row',
        borderRadius: 20,
        width: 370,
        left: 10,
        margin: 5
    },

    img3: {
        alignItems: 'center',
        margin: 20,
        width: 60,
        height: 60,
        borderRadius: 10,
    },

    ingredientes2: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    cantidad: {
        color: 'gray',
        left: 170
    },

    cantidad1: {
        color: 'gray',
        left: 180
    },

    ingre: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    ingre1: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    texts: {
        marginTop: 25,
    },

})
export default Notification;