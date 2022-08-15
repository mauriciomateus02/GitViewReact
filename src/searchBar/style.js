import styled from "styled-components/native";
import { Dimensions, TextInput, TouchableOpacity } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";

const {width} = Dimensions.get('window');

export const Container = styled.View`
    width: ${width * 0.7}px;
    height: 42px;
    background-color: #F5FFFA;
    border-radius: 20px;
    left: ${width * 0.2}px;;
    margin-top: 20px;
    
`;

export const BoxButtonSearch = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: #98FB98;
    border-radius: 30px;
    position: absolute;
    right: 0px;
    justify-content: center;
    align-items: center;
`;

export const Input = styled(TextInput)`

    flex: 1;
    color: #000000;
    margin-right: 60px;
    margin-left: 20px;
`;

export const searchIcon = styled(Icon).attrs({
    name: 'search',
})`
    color: #FFFFFF;
    font-size: 25px;
`;