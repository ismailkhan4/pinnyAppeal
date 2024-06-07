import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { calculators } from '@/constants/data'

type Props = {}

const Calculators = (props: Props) => {
    return (
        <>
            <Text className='font-pmedium text-lg mt-2'>Calculators</Text>
            <FlatList
                data={calculators}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity key={item.id} className='flex-row justify-center' style={{
                            shadowColor: 'red',
                            shadowOffset: { width: 10, height: 14 },
                            shadowOpacity: 1,
                            shadowRadius: 8,
                            elevation: 10
                        }}>
                            <View
                                className='bg-white mr-4 my-4 rounded-xl justify-center items-center'
                                style={{ width: responsiveWidth(25), height: responsiveHeight(12) }}>
                                <Image
                                    source={item.icon as ImageSourcePropType}
                                    className='w-12 h-12'
                                />
                                <Text className='font-pmedium mt-2' style={{ fontSize: responsiveFontSize(1.7) }}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

export default Calculators

const styles = StyleSheet.create({})