import { createDrawerNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation";
import Home from "../screens/HomeScreen";
import Signup from "../screens/SignupScreen";
import Groups from "../screens/GroupsScreen";
import VerifyMobile from "../screens/VerifyMobileScreen";
import Tasks from "../screens/TasksScreen";
import Group from "../screens/GroupScreen";
import Settings from "../screens/SettingsScreen";
import Profile from "../screens/ProfileScreen";
import CreateGroup from "../screens/CreateGroupScreen";
import CheckAuth from "../Utils/CheckAuth";
import EditProPic from "../screens/EditProPicScreen";
import CustomDrawer from "./CustomDrawer";
import GroupTasks from "../screens/GroupTasks/GroupTasks";
import GroupActivity from "../screens/GroupActivity";
import Announcements from "../screens/Announcements";
import GroupSettings from "../screens/GroupSettings";
import GroupMembers from "../screens/GroupMembers";

export const MainStack = createStackNavigator({
  GroupSettings: {
    screen: GroupSettings,
    navigationOptions: {
      title: "Group Settings",
      gesturesEnabled: false,
      headerLeft: null,
    },
  },
  GroupMembers: {
    screen: GroupMembers,
    navigationOptions: {
      title: "Group Members",
    },
  },
  GroupTasks: {
    screen: GroupTasks,
    navigationOptions: {
      title: "Group Tasks",
    },
  },
  GroupActivity: {
    screen: GroupActivity,
    navigationOptions: {
      title: "Group Activity",
    },
  },
  Announcements: {
    screen: Announcements,
    navigationOptions: {
      title: "Announcements",
    },
  },
});

const DrawNavigator = createDrawerNavigator(
  {
    Dashboard: { 
      screen: Home 
    },
    Profile: { 
      screen: Profile 
    },
    Tasks: { 
      screen: Tasks 
    },
    VerifyMobile: { 
      screen: VerifyMobile 
    },
    GroupSettings: { 
      screen: MainStack 
    },
    Group: { 
      screen: Group 
    },
    GroupSettings: {
      screen: GroupSettings,
    },
    GroupMembers: {
      screen: GroupMembers,
    },
    GroupTasks: {
      screen: GroupTasks,
    },
    GroupActivity: {
      screen: GroupActivity,
    },
    Announcements: {
      screen: Announcements,
    },
    Settings: { screen: Settings },
    EditProPic: { screen: EditProPic },
    Groups: { screen: Groups },
    CreateGroup: { screen: CreateGroup },
    Signup: { screen: Signup },
    CheckAuth: { screen: CheckAuth },
  },
  {
    initialRouteName: "CheckAuth",
    contentComponent: CustomDrawer,
    drawerOpenRoute: "drawerOpen",
    drawerCloseRoute: "drawerClose",
    drawerToggleRoute: "drawerToggle",
  }
);

export default DrawNavigator;
