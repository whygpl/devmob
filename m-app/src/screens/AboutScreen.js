import React, {useState, useEffect} from 'react';
import { Text, View, Image, Button, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../assets/style';
import Swiper from 'react-native-swiper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuBar from '../components/MenuBar';
import HeaderBar from '../components/HeaderBar';
import FdkList from '../components/FdkList';


const App = () => {
	const [pencarian, setPencarian] = useState('');
    const Stack = createNativeStackNavigator();

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

	function IndexScreen({ navigation }){
        return(
			<View style={{flex: 1}}>
				<View style={{flex: 1, marginHorizontal: 20, marginTop: 10, backgroundColor: '#f4f4f4'}}>
					<HeaderBar pencarian={pencarian} setPencarian={setPencarian} />
					<FdkList />	
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
				</View>
				<MenuBar />
			</View>
		);
	}

	function DetailsScreen({ navigation }) {
		return (
		  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Button
			  title="Go to Details... again"
			  onPress={() => navigation.navigate('Details')}
			/>
		  </View>
		);
	}

	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator initialRouteName="Index">
				<Stack.Screen name="Index" component={IndexScreen} options={{headerShown:false}} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;



