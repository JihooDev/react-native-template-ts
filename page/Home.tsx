import React from 'react'
import CustomSafeAreaView from '../component/CustomSafeAreaView'
import { COLORS } from '../asset/asset'
import CustomText from '../component/CustomText'
import { TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomNavigationParams, StackNavigationParams } from '../types/types'

type HomeScreenProps = NativeStackScreenProps<BottomNavigationParams, "Home">
// type HomeScreenProps = NativeStackScreenProps<BottomNavigationParams, "Home">

const Home = ({ navigation, route }: HomeScreenProps) => {

    return (
        <CustomSafeAreaView backColor={COLORS.white}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Setting', { id: 1 })}
            >
                <CustomText
                    text={"세팅으로 이동"}
                />
            </TouchableOpacity>
        </CustomSafeAreaView>
    )
}

export default Home