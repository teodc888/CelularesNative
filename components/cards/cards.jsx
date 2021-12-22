import React, { useEffect } from "react";
import { View, ScrollView, SafeAreaView, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-native";
import { GetPhone } from "../../redux/actions/actions";
import { StyleSheet } from "react-native";
import Cardd from "../card/card";
const Cards = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(GetPhone(id));
    }, 1500);
  }, [dispatch]);

  const phone = useSelector((state) => state.phone.phones);

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          {phone ? (
            phone.map((phones) => {
              return (
                <View key={phones.phone_name}>
                  <Cardd
                    id={phones.id}
                    name={phones.phone_name}
                    species={phones.slug}
                    image={phones.image}
                    slug={phones.slug}
                  />
                </View>
              );
            })
          ) : (
            <View >
              <Image
                style={{ width: 450, height: 350 }}
                source={{ uri: 'https://media1.giphy.com/media/XDSMr8dDUs04dvz3LV/giphy.gif?cid=ecf05e47f6m9dzh1wc1noiyhy0s0ietepvbp8rn76ix9aism&rid=giphy.gif&ct=s' }}
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Cards;
