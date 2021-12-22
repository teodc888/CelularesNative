import React, { useEffect } from "react";
import { DataTable } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { AllPhone, GetPhone } from "../../redux/actions/actions";
import { Link } from "react-router-native";
import { View, ScrollView, SafeAreaView } from "react-native";
import Busqueda from "../busqueda/busqueda";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPhone([]));
    dispatch(AllPhone());
  }, [dispatch]);

  const phones = useSelector((state) => state.phones);

  return (
    <View>
      <Busqueda />
      <SafeAreaView>
        <ScrollView>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Nombre</DataTable.Title>
              <DataTable.Title numeric>cantidad</DataTable.Title>
              <DataTable.Title numeric>id</DataTable.Title>
            </DataTable.Header>

            {phones &&
              phones.map((phones) => {
                return (
                  <View key={phones.brand_id}>
                    <Link to={`/phones/${phones.brand_slug}`}>
                      <DataTable.Row>
                        <DataTable.Cell>{phones.brand_name}</DataTable.Cell>
                        <DataTable.Cell numeric>
                          {phones.device_count}
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                          {phones.brand_id}
                        </DataTable.Cell>
                      </DataTable.Row>
                    </Link>
                  </View>
                );
              })}
          </DataTable>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
