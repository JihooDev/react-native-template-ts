import React, { JSXElementConstructor, useEffect } from 'react'
import styled from 'styled-components/native'
import { ht, wt } from '../responsive/responsive'
import { COLORS, ICON } from '../asset/asset'
import { MotiView } from 'moti'
import { Image } from 'react-native'
import CustomText from '../component/CustomText'

const CustomBottomTab = ({ state, navigation, descriptors }: any): JSX.Element => {

    useEffect(() => {
        console.log(state);
    }, [])

    return (
        <BottomBox>
            <BottomContainer
                style={{
                    shadowColor: COLORS.black,
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }}
            >
                {
                    state.routes.map((route: any, index: number): JSX.Element => {

                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate({ name: route.name, merge: true });
                            }

                        }

                        return (
                            <TabBarButton
                                key={index}
                                activeOpacity={.5}
                                onPress={onPress}
                            >
                                <CustomText
                                    text={route.name}
                                    color={COLORS.black}
                                />
                            </TabBarButton>
                        )
                    })
                }
            </BottomContainer>
        </BottomBox>
    )
}

const BottomBox = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.white};
    /* background-color: red; */
    height: ${ht(500)}px;
`

const BottomContainer = styled.View`
    width: 90%;
    height: ${ht(250)}px;
    background-color: ${COLORS.white};
    border-radius: 15px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const TabBarButton = styled.TouchableOpacity`
    width: ${wt(200)}px;
    height: ${ht(200)}px;
    justify-content: center;
    align-items: center;
`

export default CustomBottomTab