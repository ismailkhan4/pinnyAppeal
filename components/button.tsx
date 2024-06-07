import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { icons } from '@/constants'

type Props = {
    title: string;
    type: string;
}

const FilledButton = ({ title, type }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => { }}
            className={`${type === 'filled' ? 'bg-primary justify-between' : 'bg-transparent justify-center'}  py-4 rounded-2xl flex-row  items-center px-8`} >
            <Text className={`font-pregular ${type === 'filled' ? 'text-white' : 'text-primary'}`} style={{ fontSize: responsiveFontSize(1.8) }}>{title}</Text>
            {
                type === 'filled' && (
                    <Image
                        source={icons.right as ImageSourcePropType}
                        style={{ height: responsiveHeight(3), width: responsiveWidth(2.5) }}
                        resizeMode='contain'
                    />
                )
            }
        </TouchableOpacity>
    )
}

export default FilledButton

const styles = StyleSheet.create({})