import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const GuestList = ({ route }) => {

    const list = route?.params?.guestList
    const setList = route?.params?.setGuestList

    const handleDelete = (id) => {
        setList((prevData) => prevData.filter(item => item.id !== id));
    }

    return (
        <View>
            {list.map((item, index) =>
                <TouchableOpacity onPress={() => handleDelete(index + 1)} key={index}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default GuestList