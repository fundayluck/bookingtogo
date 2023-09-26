import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HeadTag from '../../components/HeadTag'
import Divider from '../../components/Divider'
import OrderDetails from '../../components/OrderDetails'
import OrdererDetails from '../../components/OrdererDetails'
import Icon from 'react-native-vector-icons/MaterialIcons'
import dummyData from '../../components/dummyData'


const DetailPayment = ({ navigation }) => {
    const [data, setData] = useState([])
    const [isSelected, setIsSelected] = useState([
        { id: 1, value: true, name: "Saya memesan untuk sendiri", selected: false },
        { id: 2, value: false, name: "Saya Memesan untuk orang lain", selected: true }
    ]);
    const [guestList, setGuestList] = useState(dummyData)
    console.log(guestList);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://parseapi.back4app.com/classes/hotel/bVonXoSUHK', {
                    headers: {
                        'X-Parse-Application-Id': 'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3',
                        'X-Parse-REST-API-Key': '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy'
                    }
                })
                setData(res?.data?.chosen_hotel.data?.get_chosen_hotel)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 16,
                    justifyContent: 'center',
                    left: 60,
                    marginBottom: 20
                }}
            >
                <HeadTag number='1' title='Detail Pesanan' />
                <Text style={{ fontSize: 20 }}> - </Text>
                <HeadTag number='2' title='Pembayaran' opacity={0.3} />
            </View>
            <Divider />
            <OrderDetails data={data} />
            <Divider />
            <OrdererDetails isSelected={isSelected} setIsSelected={setIsSelected} />
            {
                isSelected[1].selected === true ?
                    (
                        <View
                            style={{
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
                                Data Tamu
                            </Text>
                            {guestList.map((item, index) =>
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderColor: '#e0e0e0',
                                        borderRadius: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        padding: 10,
                                        marginVertical: 5
                                    }}
                                >
                                    <Icon name={item.gender === "male" ? "person" : "person-2"} size={25} color="black" />
                                    <View
                                        style={{
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18, marginHorizontal: 5 }}>{item.gender === 'male' ? 'Tn.' : 'Ny.'}</Text>
                                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>{item.name}</Text>
                                    </View>
                                </View>
                            )}
                            <TouchableOpacity
                                onPress={() => navigation.navigate('list', {
                                    guestList, setGuestList
                                })}
                            >
                                <Text
                                    style={{
                                        textDecorationLine: 'underline',
                                        color: '#A2B2C5',
                                        alignSelf: 'flex-end'
                                    }}
                                >Ubah Data Tamu</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null

            }
        </View>
    )
}

export default DetailPayment