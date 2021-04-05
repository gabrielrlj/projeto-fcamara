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
      StudentRegister: 'studentRegister',
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
    },
  },
};

//Navigator Doador
export const DonorNavigator = {
  DonorStackNavigator: {
    path: 'donorNavigator',
    screens: {
      DonorDashboard: 'donorDashboard',
      ConfirmationDonation: 'confirmationDonation',
      ConfirmAddress: 'confirmAddres',
      FinishDonation: 'finishDonation',
      DrawerUserData: 'drawerUserData'
    }
  },
}

export const DonorDashboardStack = {
    DonorDashboard: {
    path: 'donorDashboard',
    screens: {
      DonorNavigator: {
        screens: DonorNavigator,
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
    DonorDashboard:{
      screens: DonorDashboardStack,
    },
    NotFound: '*',
  }
};

export const linking = {
  prefixes: [Linking.makeUrl('/')],
  config: linkConfig,
}