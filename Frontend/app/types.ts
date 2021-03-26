export type RootStackParamList = {
  Home: undefined;
  Auth: AuthTabParamList;
  Dashboard: { currentScreen: 'SponsorDashboard' | 'DonorDashboard' | 'RegisterMaterials' } | undefined;
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
}