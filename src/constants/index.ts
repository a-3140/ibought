
export interface DrawerState {
  component: String;
  direction: String;
  drawerState: Boolean;
}

export const addWantDrawerInitialState = {
  title: "add want",
  showDrawer: true,
  component: "AddWant",
  direction: "rtl",
  destroyOnClose: true,
};
