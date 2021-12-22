import React, { useEffect } from "react";
import { useParams } from "react-router-native";
import { GetPhoneInfo } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { View, ScrollView, SafeAreaView } from "react-native";

export default function Phone() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(GetPhoneInfo(id));
  }, [dispatch]);
  const phone = useSelector((state) => state.phoneInfo);

  return (
    <SafeAreaView>
      <ScrollView>
        <Card>
          <Card.Content>
            <Title>{phone.brand}</Title>
            <Paragraph>{phone.phone_name}</Paragraph>
          </Card.Content>
          <Card.Cover
            style={{ width: 410, height: 540, marginLeft: 12 }}
            source={{
              uri: phone?.phone_images
                ? phone?.phone_images[0]
                : "https://media3.giphy.com/media/5AtXMjjrTMwvK/giphy.gif?cid=ecf05e47f6m9dzh1wc1noiyhy0s0ietepvbp8rn76ix9aism&rid=giphy.gif&ct=s",
            }}
          />
          <Card.Content>
            <Paragraph>Lanzamiento: {phone.release_date}</Paragraph>
            <Paragraph>Sistema Operativo: {phone.os}</Paragraph>
            <Paragraph>Almacenamiento: {phone.storage}</Paragraph>
          
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
