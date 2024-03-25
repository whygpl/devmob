import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const FdkList = () => {
    return (
        <View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
					<Text style={{color: '#0082F7', fontWeight: "bold"}}>
						List FDK
					</Text>
					<TouchableOpacity style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
						<Text style={{color: '#FDB436', fontWeight: 'bold'}}>Lihat Semua</Text>
					</TouchableOpacity>
				</View>
				<View style={{borderRadius: 10, backgroundColor: '#FFFFFF', elevation: 10, marginTop: 10}}>
					<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#018BF7', '#00BAF7']} style={{ borderRadius: 10}}>
						<TouchableOpacity style={{padding: 20, borderRadius: 10}}>							
							<View style={{flexDirection: 'row'}}>
							    <Image source={require('../../assets/z.jpg')} style={{width: 50, height: 50, borderRadius: 25, borderWidth: 2}} />
								<View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
									<Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>No. Fdk : #123908</Text>
								</View>
							</View>							
							<View style={{marginTop: 10}}>
								<View style={{flexDirection: 'row'}}>
									<Icon name="time" size={23} color="#FFFFFF" />	
									<View style={{justifyContent: 'center', alignItems: 'center'}}>
										<Text style={{color: '#f4f4f4', fontWeight: 'bold', marginLeft: 10}}>Tgl. Fdk : 10-10-2023</Text>
									</View>							
								</View>
								<View style={{flexDirection: 'row'}}>
									<Icon name="compass" size={23} color="#FFFFFF" />
									<View style={{justifyContent: 'center', alignItems: 'center'}}>
										<Text style={{color: '#FFFFFF', fontWeight: 'bold', marginLeft: 10}}>Approved by : Adm./ Sales</Text>
									</View>
								</View>	
								<View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
									<Icon name="chevron-forward-circle" size={23} color="#FFFFFF" />
								</View>					    
							</View>							
						</TouchableOpacity>
					</LinearGradient>
				</View>					
        </View>
    );
}

export default FdkList;