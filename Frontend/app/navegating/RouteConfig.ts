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

//aqui

export const DonorNavigator = {
  SponsorStackNavigator: {
    path: 'donorNavigator',
    screens: {
      DonorDashboard: 'sponsorDashboard',
    }
  },
}

export const DonorDashboardStack = {
  Dashboard: {
    path: 'donorDashboard',
    screens: {
      SponsorNavigator: {
        screens: DonorNavigator,
      },
      DonorDashboard: 'donorDashboard',
    },
  },
};


//fim

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
    DonorDashboard: {
      screens: DonorDashboardStack,
    },
    NotFound: '*',
  }
};

export const linking = {
  prefixes: [Linking.makeUrl('/')],
  config: linkConfig,
}