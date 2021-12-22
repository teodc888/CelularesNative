import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { useDispatch } from "react-redux";
import { FiltradoPorNombre } from "../../redux/actions/actions";


const Busqueda = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const handleInput = () => {
    dispatch(FiltradoPorNombre(searchQuery));
  };

  console.log(searchQuery);
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      onChange={handleInput}
      value={searchQuery}
      style={{backgroundColor:"#dd2c00",borderRadius:0, color:"white"}}
    />
  );
};

export default Busqueda;