import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { Context } from '../../context/GuestContext';
import Icon from 'react-native-vector-icons/AntDesign'

const GuestList = ({ navigation }) => {
    const [items, setItems] = useState([
        { label: 'MR', value: 'male' },
        { label: 'MRS', value: 'female' }
    ]);

    const { state, addGuestList, deleteGuestList } = useContext(Context)

    return (
        <View>
            <Text
                style={{
                    marginHorizontal: 15,
                    marginVertical: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#203960',
                }}
            >Data Tamu</Text>
            {state ? state.map((item) =>
                <View
                    style={{
                        flexDirection: 'row',
                        width: 100,
                        marginVertical: 10,
                        justifyContent: 'space-between',
                        marginHorizontal: 15,
                    }}
                    key={item.id}
                >
                    <DropDownPicker
                        value={item?.gender}
                        items={items}
                        disabled
                        // onOpen={() => handleDropdownOpen(item.id, true)}
                        // onClose={() => handleDropdownOpen(item.id, false)}
                        setItems={setItems}
                    />
                    <Text
                        style={{ backgroundColor: '#FFFFFF', borderWidth: 1, padding: 15, width: 200, marginLeft: 10, borderRadius: 10, marginRight: 10 }}
                    >{item.name}</Text>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('edit-list', item.id)}>
                        <Icon name='edit' size={25} style={{ alignSelf: 'center', marginRight: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => deleteGuestList(item.id)}>
                        <Icon name='delete' size={25} />
                    </TouchableOpacity>
                </View>
            ) : []}
            <TouchableOpacity
                style={{
                    color: 'orange',
                    textDecorationLine: 'underline',
                    alignSelf: 'center'
                }}
                onPress={addGuestList}
            ><Text>+ Tambah Data Tamu</Text></TouchableOpacity>
        </View>
    )
}

export default GuestList