import { View, Text } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from './Dimension'

const HeadTag = ({ number, title, opacity }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                opacity: opacity
            }}
        >
            <Text
                style={{
                    backgroundColor: '#305D97',
                    borderWidth: 0,
                    paddingHorizontal: WIDTH * 0.023,
                    paddingVertical: HEIGHT * 0.005,
                    marginRight: WIDTH * 0.01,
                    color: 'white',
                    borderRadius: 25,
                    fontSize: 10,
                }}
            >{number}</Text>
            <Text
                style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'black'
                }}
            >
                {title}
            </Text>
        </View>
    )
}

export default HeadTag