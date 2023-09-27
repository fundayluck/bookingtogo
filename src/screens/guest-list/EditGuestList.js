import React, { useState, useContext } from 'react'
import { View, TextInput, Button } from 'react-native'
import { Context } from '../../context/GuestContext'
import DropDownPicker from 'react-native-dropdown-picker'

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
        <View>
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
                    width: 200,
                    marginLeft: 10,
                    borderRadius: 10,
                    marginRight: 10
                }}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button title='Edit' onPress={() => {
                editGuestList(id, name, gender)
                navigation.navigate('list')
            }} />
        </View>
    )
}

export default EditGuestList