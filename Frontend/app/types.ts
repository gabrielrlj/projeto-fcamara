export type RootStackParamList = {
  Home: undefined;
  Auth: AuthTabParamList;
  AuthLoginDonor:undefined;
  Dashboard: { currentScreen: 'SponsorDashboard' | 'DonorDashboard' | 'RegisterMaterials'} | undefined;
};

export type AuthTabParamList = {
  Login: undefined;
  Register: undefined;
};

export type SponsorDashboardParamList = {
  RegisterMaterials: undefined;
  StudentData: undefined;
};

export type DashboardParamList = {
  SponsorDashboard: undefined;
  DonorDashboard: undefined;
  RegisterMaterials: undefined;
};

export type LoginDonorParamList = {
  LoginDonor: undefined;
};

export type RootLoginDonor = {
  LoginDonor: undefined;
  AuthLoginDonor:{currentScreen:'authLoginDonor'} | undefined
};