import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailPayment = ({ navigation }) => {
    return (
        <View>
            <Text>DetailPayment</Text>
            <Button
                title='ubah data tamu'
                onPress={() => navigation.navigate('list')}
            />
        </View>
    )
}

export default DetailPayment