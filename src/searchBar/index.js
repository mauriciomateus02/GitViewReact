import React, { useState } from "react";

import { Icon } from "react-native-vector-icons/FontAwesome";
import { BoxButtonSearch, Container, SearchIcon,Input } from "./style";


export default function SearchBox(){

    const [nome,setNome] = useState("")

    return(
        <Container>
            <Input  
                value={nome}
                onChangeText={text => setNome(text)}/>
            <BoxButtonSearch onPress={()=> searchUri()}/>
        </Container>
    )
}
