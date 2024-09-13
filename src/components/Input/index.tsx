import React, {forwardRef, Fragment, LegacyRef} from 'react';
import { View, Text , TextInput, TextInputProps, TouchableOpacity, } from 'react-native';
import { FontAwesome, MaterialIcons, Octicons} from '@expo/vector-icons';
import { style } from './styles';
import { themas } from '../../global/themes';



type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft? : IconComponent,
    IconRigth? : IconComponent,
    iconLeftName? : string,
    iconRigthName? : string,
    text?: string,
    title ? : string,
    onIconLeftPress? : () => void,
    onIconRigthtPress? : () => void,
    
}

export const Input = forwardRef ((Props:Props,ref: LegacyRef<TextInput> | null)=>{

    const {IconLeft, IconRigth, iconLeftName, iconRigthName, title, onIconLeftPress, onIconRigthtPress: onIconRightPress, ...rest } = Props
    
    const calculoSizeWidth = () => {
        if(IconLeft && IconRigth){
            return '80%'
        }else if(IconLeft || IconRigth){
            return '90%'
        }else{
            return'100%'
        }
    }
    const calculoSizePaddingLeft = () => {
        if(IconLeft && IconRigth){
            return 0;
        }else if(IconLeft || IconRigth){
            return 10;
        }else{
            return 20;
        }
    };

    return (
        <Fragment>
            {title &&<Text style={style.titleInput}> {title} </Text>}
            <View style={[style.BoxInput,{paddingLeft: calculoSizePaddingLeft()}]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={iconLeftName as any} size={20} color={ themas.colors.gray} style={style.Icon}/>
                    </TouchableOpacity>
                )}                
                <TextInput
                    style={[
                        style.input,{width:calculoSizeWidth()}
                    ]}
                    {...rest}
                                
                />           
                   {IconRigth && iconRigthName && (
                    <TouchableOpacity onPress={onIconRightPress}>
                        <IconRigth name={iconRigthName as any} size={20} color={ themas.colors.gray} style={style.Icon}/>
                    </TouchableOpacity>
                )}
            
            </View>
        </Fragment>
    )
})