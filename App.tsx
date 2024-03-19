// App.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Inicio from './views/Inicio';
import Portada from './views/portada';
import Detalle from './views/Detalle';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Portada">
        <Stack.Screen name="Portada" component={Portada} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Detalle" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
