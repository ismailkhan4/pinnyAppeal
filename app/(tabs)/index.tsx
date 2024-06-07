import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { icons, images } from '@/constants'
import ProgressBar from '@/components/progress-bar';
import Card from '@/components/card';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Calculators from '@/components/calculators';
import ImageCard from '@/components/image-card';
import { cardData, emergencyResponse, events, featuredCauses } from '@/constants/data';
import FilledButton from '@/components/button';
import { ImageSourcePropType } from 'react-native';

type Props = {}

const HomeScreen = (props: Props) => {
    return (
        <ScrollView>
            <StatusBar barStyle={'dark-content'} />
            <View className='flex-row'>
                <Image
                    source={icons.logo as ImageSourcePropType}
                    className='top-0 left-0'
                    style={{
                        width: responsiveWidth(50),
                        height: responsiveHeight(17)
                    }}
                    resizeMode='cover'
                />
                <View className='ml-auto flex-row justify-center items-center mt-12 mr-6'>
                    <Text className='font-pregular px-4 text-white'
                        style={{ fontSize: responsiveFontSize(2.1) }}
                    ><Text className='font-pbold'>Salam,</Text> Ahmad</Text>
                    <Image
                        source={icons.search as ImageSourcePropType}
                        className='w-6 h-6'
                    />
                </View>
            </View>

            <View className='px-3'>
                <View className='pt-2 z-20'>
                    <View className='mt-2 py-3 pb-4'>
                        <ProgressBar totalAmount={1000} collected={450} donationGoal={600} />
                    </View>
                    <View className={'flex flex-wrap flex-row justify-between z-20 py-2'}>
                        {cardData.map((card, index) => (
                            <View key={index} className={'w-1/2'}>
                                <Card
                                    title={card.title}
                                    description={card.description}
                                    imageUrl={card.imageUrl}
                                />
                            </View>
                        ))}
                    </View>
                </View>
                <Calculators />
                <ImageCard
                    title='Emergency Response'
                    data={emergencyResponse}
                    type='default'
                />
                <ImageCard
                    title='Featured Causes'
                    data={featuredCauses}
                    type='featured'
                />
                <ImageCard
                    title='Events'
                    data={events}
                    type='events'
                />
                <FilledButton
                    title="Frequently Asked Questions"
                    type='filled'
                />
                <FilledButton
                    title="Volunteer with US"
                    type='ghoost'
                />
            </View>
            <Image
                source={images.background as ImageSourcePropType}
                className='absolute -z-10 w-screen -top-4'
                resizeMode='cover'
                style={{ width: responsiveWidth(100), height: responsiveHeight(85) }}
            />
        </ScrollView>
    )
}

export default HomeScreen