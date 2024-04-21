import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dosen, Pendaftaran, Profil } from "./pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabBar } from "./components";
import Status from "./screens/Status";
import Form from "./screens/Form";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarIndicatorStyle: {
          height: 2,
          borderRadius: 5,
          backgroundColor: "#6477DB",
        },
      }}
    >
      <TopTabs.Screen name="Form" component={Form} />
      <TopTabs.Screen name="Status" component={Status} />
    </TopTabs.Navigator>
  );
}

function MainTab() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Dosen"
        component={Dosen}
        options={{
          title: "Dosen",
          headerStyle: {
            backgroundColor: "#6477DB",
            height: 200,
          },
          headerTitleAlign: "center",
          headerTitleContainerStyle: {
            paddingVertical: 20,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Pendaftaran"
        component={TopTabsGroup}
        options={{
          title: "Pendaftaran",
          headerStyle: {
            backgroundColor: "#6477DB",
            height: 200,
          },
          headerTitleAlign: "center",
          headerTitleContainerStyle: {
            paddingVertical: 20,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          title: "Profil",
          headerStyle: {
            backgroundColor: "#6477DB",
            height: 200,
          },
          headerTitleAlign: "center",
          headerTitleContainerStyle: {
            paddingVertical: 20,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="Status" component={Status} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;
