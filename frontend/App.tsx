import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "@/shared/types/navigation";

import Welcome from "@/features/Welcome/Welcome";
import DashBoard from "@/features/Dashboard/Dashboard";
import Profile from "@/features/Profile/Profile";
import Register from "@/features/Register/Register";
import Login from "@/features/Login/Login";
import NoteCreate from "@/features/NoteCreate/NoteCreate";
import NoteDetail from "@/features/NoteDetail/NoteDetail";
import NoteEdit from "@/features/NoteEdit/NoteEdit";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NoteCreate" component={NoteCreate} />
        <Stack.Screen name="NoteDetail" component={NoteDetail} />
        <Stack.Screen name="NoteEdit" component={NoteEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
