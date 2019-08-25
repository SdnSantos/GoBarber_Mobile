import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  return <Background />;
}

Dashboard.navigationOptions = {
  // renomeia a aba do Dashboard (label)
  tabBarLabel: 'Agendamentos',
  // foi feito em forma de função o icone
  // pq a cor vem como parametro (tintColor) de dentro do react navigation
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
