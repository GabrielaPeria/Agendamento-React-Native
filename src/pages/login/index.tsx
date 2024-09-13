import {
    Text, 
    View, 
    Image,
    ActivityIndicator,
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';

import { themas } from "../../global/themes";
import React, { useState } from 'react';
import {Button } from '../../components/Button';
import { Linking } from 'react-native';


export default function Login () {
    const [loading, setLoading] = useState(false);

    const openCalendarLink = () => {
        const calendarLink = 'https://calendar.app.google/gN9nWfVeL7A3Rwcy8';
        
        Linking.openURL(calendarLink).catch((err) => console.error('Failed to open URL:', err));
    };

    return (
        <View style={style.container}>   

            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Agendamento</Text>
                <Text style={style.text}></Text>
                <Text style={style.textbold}>Para qual serviço deseja o agendamento?</Text>
                                    
            </View>
             <View style={style.boxMid}>
                <Button 
                    text="Instalação" 
                    onPress={openCalendarLink} 
                />
                <Button 
                    text="Manutenção" 
                    onPress={openCalendarLink} 
                />
                <Button 
                    text="Retirada" 
                    onPress={openCalendarLink} 
                />
             </View>
                <View style={style.boxBottom}>
                    {loading && <ActivityIndicator size="large" color={themas.colors.primary} />}
                </View>
                <Text style={style.baseboard}>Dúvidas? Entre em contato 16 3505-2040 </Text>
        </View>
    );
}
