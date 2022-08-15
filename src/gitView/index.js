import React,{Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default class GitView extends Component{
    render(){
        return(
           
            <View style={styles.styleModal}>
                 <TouchableOpacity onPress={() => openUrl(this.props.data.html_url)}>
                    <Text style={styles.nameView}>ID: {this.props.data.id}</Text>
                    <Text style={styles.nameView}>Name: {this.props.data.name}</Text>
                </TouchableOpacity>
            </View>
           
        )
    }
}

async function openUrl(url){
    
    const supported = await Linking.canOpenURL(url);
    
    if (supported) {
        await Linking.openURL(url);

      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
}

const styles = StyleSheet.create({
    container:{

    },
    nameView:{
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    styleModal:{
        backgroundColor: '#98FB98',
        margin: 20,
        padding: 20,
        borderRadius: 20,
        width: 280,
        height: 100,
        alignItems: 'center',
        shadowColor: '#000',
        position: 'relative',
        justifyContent: 'center',
        alignSelf: 'center'

        
    }
});