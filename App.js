import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {
  NCButton,
  getRouteConfig,
  renderComponent,
} from 'react-native-nc-components-levelone';

const config = {
  type: 'tab',
  screens_config: [
    {
      title: 'Home Screen',
      component: () => renderComponent({name: 'Home Screen body'}),
    },
    {
      title: 'Details Screen',
      component: () => renderComponent({name: 'Details Screen body'}),
    },
  ],
  innerNavigation: false,
};

const App = () => {
  return getRouteConfig(config);
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
