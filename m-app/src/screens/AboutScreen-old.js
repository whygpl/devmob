import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../assets/style';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';
import { ProductsList } from '../screens/ProductsList';

const images = [
	'https://g-store.id/_next/image?url=https%3A%2F%2Fapi.g-store.id%2Fimg%2Farticles%2F02banner_gstore_caladine_19062019.jpg&w=256&q=75',
	'https://g-store.id/_next/image?url=https%3A%2F%2Fapi.g-store.id%2Fimg%2Fbrand%2Fcaladine-baby.webp&w=1920&q=75',
	'https://g-store.id/_next/image?url=https%3A%2F%2Fapi.g-store.id%2Fimg%2Farticles%2Fimage.jpg&w=256&q=75',
  ];

function HomeScreen({ navigation }) {
	
  return (
    <View style={styles.container}>
			<View style={styles.headerContainer}>				
				<View style={styles.buttonsContainer}>
					<Text style={styles.headerTitle}>
						Galenium Apps
					</Text>
					<TouchableOpacity
						onPress={
							() => navigation.navigate("Settings")
								
						} style={styles.button}>
						<Icon name="settings" size={20} color="white" />						
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.featuresContainer}>
			    <LinearGradient
					// Background Linear Gradient
					colors={['rgba(255,255,255, 0.9)', 'transparent']}
					style={styles.background}
				/>

				<PressableFeatureBox name="Product"
					icon="stats-chart" onPress=
					{
						() => navigation.navigate("Productlts")
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
			<View style={styles.swiperContainer}>
				<Swiper autoplay={true} autoplayTimeout={20}>
					{images.map((image, index) => (
					<View key={index} style={styles.slide}>
						<Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
					</View>
					))}
				</Swiper>
			</View>			
		</View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProductltsScreen() {
	return (
		<ProductsList />
	);
  }

const Tab = createBottomTabNavigator();

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

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Icon name="person" size={20} color="red" />
              );
            } else if (route.name === 'Productlts') {
              return (
				<Icon name="settings" size={20} color="red" />
              );
            }
			else if (route.name === 'Settings') {
				return (
				  <Icon name="settings" size={20} color="red" />
				);
			  }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown:false}}
        />
		<Tab.Screen name="Productlts" component={ProductltsScreen}  options={{headerShown:false}} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
	
  );
}
