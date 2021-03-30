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
      SponsorRegister: 'sponsorRegister',
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

export const DonorDashboard = {
  SponsorStackNavigator: {
    path: 'donorNavigator',
    screens: {
      DonorDashboard: 'donorDashboard',
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
      DonorNavigator: {
        screens: DonorDashboard,
      },
    },
  },
};

// Root Navigator Controller
const linkConfig = {
  screens: {
    Home: '',
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