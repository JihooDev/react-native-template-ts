import React from 'react'
import { COLORS } from '../asset/asset'
import { Text } from 'react-native'
import { font } from '../responsive/responsive'

interface Props {
    text: string,
    type?: "Black" | "Bold" | "ExtraBold" | "ExtraLight" | "Light" | "Medium" | "Regular" | "SemiBold" | "Thin",
    color?: string,
    size?: number
}

const CustomText = ({
    text,
    type = 'Medium',
    color = COLORS.black,
    size = 15
}: Props) => {
    return (
        <Text style={{
            color,
            fontSize: font(size),
            fontFamily: `Pretendard-${type}`
        }}>
            {text}
        </Text>
    )
}

export default CustomText