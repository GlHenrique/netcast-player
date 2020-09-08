import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Watch from '../pages/Watch';
import theme from '../theme';

const Tab = createBottomTabNavigator();

const AddContainerIcon = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-bottom: 38px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  elevation: 5;
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 5px;
  background-color: ${theme.colors.primary};
`;

export default function TabHome() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
      }}
    >
      <Tab.Screen
        name="Watch"
        component={Watch}
        options={{
          tabBarLabel: 'Watch!',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="television-classic"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <AddContainerIcon>
              <MaterialCommunityIcons
                name="plus"
                color={theme.colors.background}
                size={38}
              />
            </AddContainerIcon>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="star-outline"
              color={color}
              size={size}
            />
          ),
          tabBarBadge: 'New',
        }}
      />
    </Tab.Navigator>
  );
}
