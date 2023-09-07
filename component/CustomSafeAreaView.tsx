import React from 'react'
import { SafeAreaView } from 'react-native'
import { COLORS } from '../asset/asset'

interface Props {
    backColor?: string,
    children: JSX.Element
}

const CustomSafeAreaView = ({
    backColor = COLORS.white,
    children
}: Props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: backColor }}>
            {children}
        </SafeAreaView>
    )
}

export default CustomSafeAreaView;