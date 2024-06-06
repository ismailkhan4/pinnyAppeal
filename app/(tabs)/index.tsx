import { Image, ScrollView, Text, View } from 'react-native'
import { icons, images } from '@/constants'
import ProgressBar from '@/components/progress-bar';
import Card from '@/components/card';
import Calculators from '@/components/calculators';
import ImageCard from '@/components/image-card';
import { cardData, emergencyResponse, events, featuredCauses } from '@/constants/data';
import FilledButton from '@/components/button';

type Props = {}

const HomeScreen = (props: Props) => {
    return (
        <ScrollView>
            <View className='flex-row'>
                <Image
                    //@ts-ignore
                    source={icons.logo}
                    className='absolute top-0 left-0 w-56 h-36 z-20'
                    resizeMode='contain'
                />
            </View>

            <View className='px-3'>
                <View className='z-20 ml-auto flex-row justify-center items-center mt-24 mr-6'>
                    <Text className='font-pregular text-xl px-4 text-white'><Text className='font-pbold'>Salam,</Text> Ahmad</Text>
                    <Image
                        //@ts-ignore
                        source={icons.search}
                        className='w-6 h-6'
                    />
                </View>
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
                {/* Calculators */}
                <Calculators />
                {/* Emergency Response */}
                <ImageCard
                    title='Emergency Response'
                    data={emergencyResponse}
                    type='default'
                />
                {/* Featured Causes */}
                <ImageCard
                    title='Featured Causes'
                    data={featuredCauses}
                    type='featured'
                />
                {/* Events */}
                <ImageCard
                    title='Events'
                    data={events}
                    type='events'
                />
                {/* FAQs */}
                <FilledButton
                    title="Frequently Asked Questions"
                    type='filled'
                />
                {/* Volunteer with US */}
                <FilledButton
                    title="Volunteer with US"
                    type='ghoost'
                />
                <Image
                    // @ts-ignore
                    source={images.background}
                    className='absolute -z-10 w-screen -top-4 h-[70vh]'
                    resizeMode='contain'
                />
            </View>
        </ScrollView>
    )
}

export default HomeScreen