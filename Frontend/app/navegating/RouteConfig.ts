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

export const AuthDefaultTab = {
  AuthDefault: {
    path: 'authDefault',
    screens: {
      DefaultLogin: 'defaultLogin',
      RegisterDonor: 'registerDonor',
      SponsorRegisger: 'sponsorRegister',
    },
  },
};

export const SponsorNavigator = {
  SponsorStackNavigator: {
    path: 'sponsorNavigator',
    screens: {
      SponsorDashboard: 'sponsorDashboard',
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
    AuthDefault: {
      screens: AuthDefaultTab,
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