import React, { useState, useContext } from 'react'
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native'
import { Context } from '../../context/GuestContext'
import DropDownPicker from 'react-native-dropdown-picker'
import { WIDTH } from '../../components/Dimension'

const EditGuestList = ({ route, navigation }) => {
    const { state, editGuestList } = useContext(Context)
    const id = route.params
    const guestList = state.find((guestList) => guestList.id === id)
    const [dropdownOpen, setDropdownOpen] = useState({});
    const [name, setName] = useState(guestList.name)
    const [gender, setGender] = useState(guestList.gender)
    const [items, setItems] = useState([
        { label: 'MR', value: 'male' },
        { label: 'MRS', value: 'female' }
    ]);

    const handleDropdownOpen = (id, isOpen) => {
        setDropdownOpen(prevOpenState => ({
            ...prevOpenState,
            [id]: isOpen,
        }));
    };

    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    width: WIDTH * 0.23,
                    marginVertical: 10,
                    justifyContent: 'space-between',
                    marginHorizontal: 30,
                    alignContent: 'center'
                }}
            >
                <DropDownPicker
                    value={gender}
                    setValue={setGender}
                    items={items}
                    onOpen={() => handleDropdownOpen(guestList.id, true)}
                    onClose={() => handleDropdownOpen(guestList.id, false)}
                    setItems={setItems}
                    open={dropdownOpen[guestList.id]}
                />
                <TextInput
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderWidth: 1,
                        padding: 15,
                        width: WIDTH * 0.57,
                        height: 50,
                        marginLeft: 10,
                        borderRadius: 10,
                        marginRight: 10
                    }}
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    editGuestList(id, name, gender)
                    navigation.navigate('list')
                }}
                style={{
                    height: 50,
                    backgroundColor: '#F9823C',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginHorizontal: 30,
                }}
            >
                <Text

                >Edit</Text>
            </TouchableOpacity>
        </>
    )
}

export default EditGuestList