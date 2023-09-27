import { View, Button } from 'react-native'
import React from 'react'

const First = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                marginHorizontal: 10
            }}
        >
            <Button
                title='Request'
                onPress={() => navigation.navigate('detail')}
            />
        </View>
    )
}

export default First