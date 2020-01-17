import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {
    requestPermissionsAsync,
    getCurrentPositionAsync,
} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#Eee',
    },
    callout: {
        width: 260,
        padding: 5,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs: {
        marginTop: 5,
    },

    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8e4dff',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
    },
});

export default function Main({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                });
            }
        }
        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.map}>
                <Marker
                    coordinate={{ latitude: -22.839017, longitude: -42.036886 }}
                >
                    <Image
                        style={styles.avatar}
                        source={{
                            uri:
                                'https://api.adorable.io/avatars/64/abott@adorable.png',
                        }}
                    />
                    <Callout
                        onPress={() => {
                            navigation.navigate(`Profile`, {
                                github_username: 'higorhms',
                            });
                        }}
                    >
                        <View style={styles.callout}>
                            <Text style={styles.devName}>Higor Martins</Text>
                            <Text style={styles.devBio}>AAAA</Text>
                            <Text style={styles.devTechs}>techs</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar devs por techs.."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />
                <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
                    <MaterialIcons name="my-location" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </>
    );
}
