import { Text, View } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

type Props = {}

const RoundupScreen = (props: Props) => {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='font-pregular' style={{ fontSize: responsiveFontSize(3) }}>Coming Soon</Text>
        </View>
    )
}

export default RoundupScreen