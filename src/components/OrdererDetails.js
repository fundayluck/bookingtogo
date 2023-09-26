import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const OrdererDetails = ({ isSelected, setIsSelected }) => {
    const onRadioBtnClick = (item) => {
        let updatedState = isSelected.map((isSelectedItem) =>
            isSelectedItem.id === item.id
                ? { ...isSelectedItem, selected: true }
                : { ...isSelectedItem, selected: false }
        );
        setIsSelected(updatedState);
    };
    return (
        <View
            style={{
                marginTop: 20,
                paddingHorizontal: 18
            }}
        >
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    marginBottom: 10
                }}
            >
                Detail Pesanan
            </Text>
            <View
                style={{
                    borderWidth: 1,
                    borderColor: '#e0e0e0',
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 10
                }}
            >
                <View>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Tn. Andreas Andreas</Text>
                    <Text>andreasandreas@gmail.com</Text>
                    <Text>+628 22 2222 2222</Text>
                </View>
                <Text style={{ textDecorationLine: 'underline', color: '#A2B2C5' }}>Ubah</Text>
            </View>
            <View style={styles.selectContainer}>
                {isSelected.map((item, index) => (
                    <View style={styles.radioButtonContainer} key={index}>
                        <TouchableOpacity onPress={() => onRadioBtnClick(item)} style={styles.radioButton}>
                            {item.selected ? <View style={styles.radioButtonIcon} /> : null}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onRadioBtnClick(item)}>
                            <Text style={styles.radioButtonText}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    selectContainer: {
        marginVertical: 10
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 45,
        marginVertical: 5
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#335997",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#335997"
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16
    }
})

export default OrdererDetails