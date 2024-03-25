import React from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderBar = (props) => {
    return (
        <View>
              <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
				<Text style={{color: '#212121'}}>Hello</Text>
				<Text style={{fontSize: 22, fontWeight: 'bold', color: '#212121'}}>Admin</Text>
				<View style={{flexDirection: 'row'}}>					
					<TextInput 
						value={props.pencarian}
						onChangeText={text => props.setPencarian(text)}
						placeholder="Cari FDK"
						style={{
							backgroundColor: '#FFFFFF', 
							elevation: 3, 
							marginTop: 20, 
							paddingLeft: 10,
							borderRadius: 5,
							flex: 1,
							paddingTop: 5,
							paddingBottom: 5,
						}}
					/>
					<TouchableOpacity 
						style={{
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#0082F7',
						marginTop: 20,
						paddingHorizontal: 10,
						borderRadius: 5,
						marginLeft: 10,
						elevation: 3,
					}}>
						<Icon name="search" size={25} color="#FFFFFF" />
					</TouchableOpacity>					
				</View>				
        </View>
    );
}

export default HeaderBar;