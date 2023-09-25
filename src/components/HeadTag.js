import { View, Text } from 'react-native'
import React from 'react'

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
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    marginRight: 10,
                    color: 'white',
                    borderRadius: 25,
                    fontSize: 12,
                }}
            >{number}</Text>
            <Text
                style={{
                    fontSize: 15,
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