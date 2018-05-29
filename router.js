import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import {
  createStackNavigator,
  TabNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './src/screens/Home';
import Result from './src/screens/Result';
import Search from './src/screens/Search';
import Setting from './src/screens/Setting';
// import Space from './src/screens/Space';
import ItemsList from './src/screens/ItemsList';
import SectionsList from './src/screens/SectionsList';
import ItemInfo from './src/screens/ItemInfo';

let screen = Dimensions.get('window');

export const SearchItemStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search'
    }
  },
  Result: {
    screen: Result
  }
});

export const SectionStack = createStackNavigator({
  SectionsList: {
    screen: SectionsList,
    navigationOptions: {
      title: 'Sections'
    }
  },
  ItemsList: {
    screen: ItemsList
  },
  ItemInfo: {
    screen: ItemInfo
  }
});

export const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="check" type="entypo" size={28} color={tintColor} />
        )
      }
    },
    Search: {
      screen: SearchItemStack,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" type="feather" size={28} color={tintColor} />
        )
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="settings" type="feather" size={28} color={tintColor} />
        )
      }
    },
    Section: {
      screen: SectionStack,
      navigationOptions: {
        tabBarLabel: 'Inventory',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="heart-box"
            type="material-community"
            size={28}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    order: ['Home', 'Section', 'Search', 'Setting']
  }
);

// export const createRootNavigator = () => {
//   return createStackNavigator({
//     Tabs: {
//       screen: Tabs,
//       navigationOptions: {
//         gesturesEnabled: false
//       }
//     }
//   });
// };
