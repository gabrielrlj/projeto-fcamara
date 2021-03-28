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

export const DonorStack = {
  AuthLoginDonor: {
    path: 'authLoginDonor',
    screens: {
      LoginDonor: 'loginDonor',
      RegisterDonor:'registerDonor'
    },
  },
};

export const DashboardStack = {
  Dashboard: {
    path: 'dashboard',
    screens: {
      SponsorDashboard: 'sponsorDashboard',
      DonorDashboard: 'donorDashboard',
      RegisterMaterials: 'registerMaterials',
    },
  },
};


const linkConfig = {
  screens: {
    Home: '',
    Auth: {
      screens: AuthTab,
    },
    Dashboard: {
      screens: DashboardStack,
    },
    AuthLoginDonor: {
      screens: DonorStack,
    },
    NotFound: '*',
  }
};

export const linking = {
  prefixes: [Linking.makeUrl('/')],
  config: linkConfig,
}