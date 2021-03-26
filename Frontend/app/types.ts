export type RootStackParamList = {
  Home: undefined;
  Auth: AuthTabParamList;
  Dashboard: { currentScreen: 'SponsorNavigator' | 'DonorDashboard' } | undefined;
};

export type AuthTabParamList = {
  Login: undefined;
  Register: undefined;
};

export type SponsorNavigatorParamList = {
  SponsorDashboard: undefined;
  RegisterMaterials: undefined;
  StudentData: undefined;
};

export type DashboardParamList = {
  SponsorNavigator: undefined;
  DonorDashboard: undefined;
}