import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Scene, Router, Tabs, ActionConst} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from '../screen/login';
import Home from '../screen/tabs/home';
import Admin from '../screen/tabs/admin';
import Profile from '../screen/tabs/profile';

const AppNavigator = () => {
  const iconHome = () => <Icon color="#f53d3d" name="home" size={25} />;
  const iconAdmin = () => <Icon color="#f53d3d" name="atom" size={25} />;
  const iconProfile = () => <Icon color="#f53d3d" name="user-md" size={25} />;

  return (
    <Router>
      <Scene key="Root" hideNavBar={true}>
        <Scene key="login" component={Login} title="Login" hideNavBar />
        <Tabs
          key="Main"
          type={ActionConst.RESET}
          routeName="tabbar"
          tabBarPosition="bottom"
          //swipeEnabled
          tabBarStyle={{backgroundColor: '#FFF'}}
          activeTintColor="#D2292D"
          inactiveTintColor="#000"
          hideNavBar>
          <Scene
            key="Home"
            component={Home}
            initial={true}
            icon={iconHome}
            name="profile"
            hideNavBar={true}
          />
          <Scene
            key="Admin"
            component={Admin}
            icon={iconAdmin}
            name="profile"
            hideNavBar={true}
          />
          <Scene
            key="Profile"
            component={Profile}
            icon={iconProfile}
            name="profile"
            hideNavBar={true}
          />
        </Tabs>
      </Scene>
    </Router>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
