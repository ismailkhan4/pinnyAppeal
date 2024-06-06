import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
                        <TouchableOpacity key={item.id} className='flex-row justify-center'>
                            <View className='bg-white mr-4 my-4 rounded-xl px-6 justify-center items-center py-4'>
                                <Image
                                    //@ts-ignore
                                    source={item.icon}
                                    className='w-12 h-12'
                                />
                                <Text>{item.title}</Text>
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