export type RootStackParamList = {
  Home: undefined;
  Auth: AuthTabParamList;
  AuthDefault: AuthTabParamList;
  //AuthRegisterDonor: DonorParamList;
  Dashboard: { currentScreen: 'SponsorNavigator' | 'DonorDashboard' | 'RegisterDonor' | 'DefaultLogin'} | undefined;
};

export type AuthTabParamList = {
  Login: undefined;
  Register: undefined;
  RegisterDonor: undefined;
  DefaultLogin: undefined;
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


//aqui
// export type RootDonorStackParamList = {
//   HomeDefault: undefined;
//   LoginRegisterDonor: DonorParamList;
//   DashboardDefault: { currentScreen: 'DefaultLogin' | 'RegisterDonor' } | undefined;
// };

// export type DonorParamList = {
//   DefaultLogin: undefined;
//   RegisterDonor: undefined;
// };

// export type DashboardDonorParamList = {
//   AuthDefault: undefined;
//   AuthRegisterDonor: undefined;
// }

//fim