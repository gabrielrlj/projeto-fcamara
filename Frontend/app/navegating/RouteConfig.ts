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

export const SponsorNavigator = {
  SponsorStackNavigator: {
    path: 'sponsorNavigator',
    screens: {
      RegisterMaterials: 'registerMaterials',
    }
  },
}

// Main Dashboard Navigator Controller
export const DashboardStack = {
  Dashboard: {
    path: 'dashboard',
    screens: {
      SponsorNavigator: {
        screens: SponsorNavigator,
      },
      DonorDashboard: 'donorDashboard',
    },
  },
};

// Root Navigator Controller
const linkConfig = {
  screens: {
    Home: '',
    Auth: {
      screens: AuthTab,
    },
    Dashboard: {
      screens: DashboardStack,
    },
    NotFound: '*',
  }
};

export const linking = {
  prefixes: [Linking.makeUrl('/')],
  config: linkConfig,
}