import * as  Linking from "expo-linking";

export const AuthTab = {
  Auth: {
    path: 'auth',
    screens: {
      Login: 'login',
      Register: 'register',
    },
  },
};

const linkConfig = {
  screens: {
    Home: '',
    Auth: {
      screens: AuthTab,
    },
    Dashboard: 'dashboard',
    NotFound: '*',
  }
};

export const linking = {
  prefixes: [Linking.makeUrl('/')],
  config: linkConfig,
}