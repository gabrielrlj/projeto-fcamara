export type UserTypes = "sponsor" | "donor" | null;

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
};

// Parametros Navegacao
export type DonorNavigatorParamList = {
  DonorDashboard: undefined;
  ConfirmationDonation: undefined;
  ConfirmAddres:undefined;
  FinishDonation:undefined;
  DrawerUserData: undefined;
  DonationFinalized:undefined;
};

export type DonorDashboardParamList = {
  DonorNavigator: undefined;
  ConfirmationDonation:undefined;
  ConfirmAddres:undefined;
  FinishDonation:undefined;
  DrawerUserData: undefined;
  DonationFinalized:undefined;
}

export type DashboardParamList = {
  SponsorNavigator: undefined;
}