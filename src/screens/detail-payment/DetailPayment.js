import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import HeadTag from '../../components/HeadTag'
import Divider from '../../components/Divider'

const DetailPayment = ({ navigation }) => {
    const [data, setData] = useState([])
    console.log(data?.chosen_hotel);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://parseapi.back4app.com/classes/hotel/bVonXoSUHK', {
                headers: {
                    'X-Parse-Application-Id': 'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3',
                    'X-Parse-REST-API-Key': '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy'
                }
            })
            setData(res.data)
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
            <View>

            </View>
            {/* <Button
                title='ubah data tamu'
                onPress={() => navigation.navigate('list')}
            /> */}
        </View>
    )
}

export default DetailPayment