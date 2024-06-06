import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { icons } from '@/constants'

type Props = {
    title: string;
    type: string;
}

const FilledButton = ({ title, type }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => { }}
            className={`${type === 'filled' ? 'bg-[#FF9C27] justify-between' : 'bg-transparent justify-center'}  py-4 rounded-2xl flex-row  items-center px-8`} >
            <Text className={`font-pregular ${type === 'filled' ? 'text-white' : 'text-[#FF9C27]'} `}>{title}</Text>
            {
                type === 'filled' && (
                    <Image
                        // @ts-ignore
                        source={icons.right}
                        className='w-4 h-4'
                        resizeMode='contain'
                    />
                )
            }
        </TouchableOpacity>
    )
}

export default FilledButton

const styles = StyleSheet.create({})