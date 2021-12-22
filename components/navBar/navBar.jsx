import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { Link } from 'react-router-native';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const NavBar = () => (
    <Appbar.Header style={{backgroundColor:"#dd2c00"}} >
        <Link to="/">
        <Appbar.Content title="CELULARES" subtitle={'Phones'} />
        </Link>
    </Appbar.Header>
);

export default NavBar;