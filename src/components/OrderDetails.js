import React from 'react'
import { View, Text, Image } from 'react-native'
import moment from 'moment'

const OrderDetails = ({ data }) => {
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
                    alignItems: 'center'
                }}
            >
                <Image
                    style={{
                        width: 70,
                        height: 70,
                        margin: 10,
                        borderRadius: 10
                    }}
                    source={{ uri: data?.chosen_hotel_detail?.images[0]?.url }}
                />
                <View>
                    <Text style={{ color: '#335997', fontWeight: 'bold' }}>{data?.chosen_hotel_detail?.hotel_name}</Text>
                    <Text>{data?.chosen_hotel_room?.room_name}</Text>
                    <Text>{data?.chosen_hotel_params?.total_room} Kamar &#183; Quardruple &#183; {data?.chosen_hotel_params?.guest_adult} Tamu &#183; 10 Malam</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10
                }}
            >
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>Check-In</Text>
                <Text>{moment(data?.chosen_hotel_params?.check_in).format('DD MMMM YYYY')}</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>Check-Out</Text>
                <Text>{moment(data?.chosen_hotel_params?.check_out).format('DD MMMM YYYY')}</Text>
            </View>
            <Text style={{ alignSelf: 'flex-end', marginVertical: 15, fontSize: 14, color: 'red' }}>Dapat direfund jika dibatalkan</Text>
        </View>
    )
}

export default OrderDetails