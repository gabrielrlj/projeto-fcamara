export type UserTypes = "sponsor" | "donor";

export type RootStackParamList = {
  AuthDefault: undefined;
  Dashboard: undefined;
  DonorDashboard:undefined;
};

export type AuthTabParamList = {
  SponsorRegister: undefined;
  RegisterDonor: undefined;
  DefaultLogin: undefined;
};

export type SponsorNavigatorParamList = {
  SponsorDashboard: undefined;
  RegisterMaterials: undefined;
  StudentData: undefined;
  StudentRegister: undefined;
};

// Parametros Navegacao
export type DonorNavigatorParamList = {
  DonorDashboard: undefined;
};

export type DonorDashboardParamList = {
  DonorNavigator: undefined;
}

export type DashboardParamList = {
  SponsorNavigator: undefined;
  DonorNavigator: undefined;
}