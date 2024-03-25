import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../assets/style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Swiper from 'react-native-swiper';

const ShortcutList = () => {
    const PressableFeatureBox = (
		{ name, icon,
			onPress
		}
	) => (
		<TouchableOpacity onPress={onPress}
			style={styles.featureBox}>
			<Icon name={icon} size={25}
				color="#3498db" />
			<Text style={styles.featureName}>
				{name}
			</Text>
		</TouchableOpacity>
	);


    return (
        <View style={styles.featuresContainer}>
            <PressableFeatureBox name="Product"
                icon="stats-chart" onPress=
                {
                    () => navigation.navigate("Details")
                } />
            <PressableFeatureBox name="FDK"
                icon="chatbox" onPress=
                {
                    () => navigation.navigate("About")
                } />
            <PressableFeatureBox name="Approval"
                icon="checkbox-outline" onPress=
                {
                    () => navigation.navigate("About")
                } />
            <PressableFeatureBox name="Release"
                icon="calendar" onPress=
                {
                    () => navigation.navigate("About")
                } />
        </View>	
    );
}

export default ShortcutList;