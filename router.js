import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import {
  createStackNavigator,
  TabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import { greyscale } from './src/styles/colors';

import Home from './src/screens/Home';
import Result from './src/screens/Result';
import Search from './src/screens/Search';
import Setting from './src/screens/Setting';
import ItemsList from './src/screens/ItemsList';
import SectionsList from './src/screens/SectionsList';
import ItemInfo from './src/screens/ItemInfo';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import AddItem from './src/screens/AddItem';
import Start from './src/screens/Start';

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
  },
  AddItem: {
    screen: AddItem
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

export const SignedOutLayout = createStackNavigator({
  Start: {
    screen: Start,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  }
});

const options = {
  inactiveTintColor: greyscale.darkShade,
  activeTintColor: greyscale.main
};
export const SignedInLayout = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" type="entypo" size={28} color={tintColor} />
        ),
        tabBarOptions: options
      }
    },
    Search: {
      screen: SearchItemStack,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" type="feather" size={28} color={tintColor} />
        ),
        tabBarOptions: options
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="settings" size={28} color={tintColor} />
        ),
        tabBarOptions: options
      }
    },
    Section: {
      screen: SectionStack,
      navigationOptions: {
        tabBarLabel: 'Kitchen',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="fridge-filled"
            type="material-community"
            size={28}
            color={tintColor}
          />
        ),
        tabBarOptions: options
      }
    }
  },
  {
    initialRouteName: 'Home',
    order: ['Home', 'Section', 'Search', 'Setting']
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedInLayout: {
        screen: SignedInLayout
      },
      SignedOutLayout: {
        screen: SignedOutLayout
      }
    },
    {
      initialRouteName: signedIn ? 'SignedInLayout' : 'SignedOutLayout'
    }
  );
};
