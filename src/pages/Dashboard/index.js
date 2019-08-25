import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import {Container, Title, List} from './styles';

export default function Dashboard() {
  const data = [1, 2, 3, 4, 5];

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
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
