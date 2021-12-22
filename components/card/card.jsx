import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Link } from 'react-router-native';

const Cardd = (props) => (
  <Card key={props.id} style={{backgroundColor:"#eceff1", marginBottom:30, borderRadius:50, marginTop:20, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    <Card.Content >
      <Title style={{color:"black"}}>{props.name}</Title>
      <Paragraph style={{color:"black"}}>{props.species}</Paragraph>
    </Card.Content>
    <Card.Cover style={{ width: 250, height: 330}}  source={{ uri: props.image }}  />
    <Card.Actions>
      <Link to={`/phone/${props.slug}`}>
        <Button style={{color:"white"}}>Ver</Button>
      </Link>
    </Card.Actions>
  </Card>

);

export default Cardd;