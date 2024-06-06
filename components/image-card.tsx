import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    title: string;
    type: string;
    data: any;
}

const ImageCard = ({ title, data, type }: Props) => {
    return (
        <View>
            <Text className='font-pmedium text-lg mt-2'>{title}</Text>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity key={item.id} className='flex-row  justify-center'>
                            <View className='bg-white mr-4 my-4 rounded-3xl justify-center items-center '>
                                <Image
                                    //@ts-ignore
                                    source={item.imgSrc}
                                    className='w-full h-44 rounded-t-3xl rounded-br-[70]'
                                    resizeMode='cover'
                                />
                                <View className={`${type === 'featured' ? 'w-52' : 'w-80'} bg-white p-4 -mt-6 rounded-b-3xl rounded-tl-3xl`}>
                                    <Text className={`${type === 'default' ? 'font-psemibold' : 'font-plight w-52'} `}>{item.title}</Text>
                                    {
                                        type === 'default' && (
                                            <View className='flex-row items-end gap-1'>
                                                <Image
                                                    // @ts-ignore
                                                    source={item.iconSrc}
                                                    className='w-6 h-6'
                                                    resizeMode='contain'
                                                />
                                                <Text className='text-[#5A606D] font-plight'>{item.donors} Donors</Text>
                                            </View>
                                        )
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ImageCard

const styles = StyleSheet.create({})