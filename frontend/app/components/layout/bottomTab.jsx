import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../../screens/Home';

const Tab = createBottomTabNavigator();

const Search = () => <View style={styles.screen}><Text>Search</Text></View>;
const Likes = () => <View style={styles.screen}><Text>Resources</Text></View>;
const Notifications = () => <View style={styles.screen}><Text>Institutions</Text></View>;
const Profile = () => <View style={styles.screen}><Text>Profile</Text></View>;

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Resources':
              iconName = 'book-open';
              break;
            case 'Institutions':
              iconName = 'globe';
              break;
            case 'Profile':
              iconName = 'user';
              break;
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#0454a0',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: { fontSize: 12 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Resources" component={Likes} />
      <Tab.Screen name="Institutions" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  tabBar: {
    position: 'absolute',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    paddingTop: 10,
    elevation: 10,
  },
});
