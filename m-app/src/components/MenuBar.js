import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuBar = () => {
    return (
        <View 
            style={{
                flexDirection: 'row',
                backgroundColor: '#FFFFFF',
                elevation: 3,
                paddingBottom: 10,
                paddingTop: 7,
                marginHorizontal: 20,
                marginBottom: 10,
                borderRadius: 5,
            }}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="home" size={23} color="#0082F7" />
                <Text style={{fontSize: 12}}>Home</Text>
            </TouchableOpacity>		
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="filter-circle" size={23} color="#bdbdbd" />
                <Text style={{fontSize: 12}}>Product</Text>
            </TouchableOpacity>	
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="file-tray-full" size={23} color="#bdbdbd" />
                <Text style={{fontSize: 12}}>FDK</Text>
            </TouchableOpacity>	
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="person-circle" size={23} color="#bdbdbd" />
                <Text style={{fontSize: 12}}>Approval</Text>
            </TouchableOpacity>			
        </View>		
    );
}	

export default MenuBar;