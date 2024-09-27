import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import LogIn from "../screens/login";
import Confirm from "../screens/confirm";
import SignUp from "../screens/SignUp";
import NextSignUp from "../screens/NextSignUp";
import Verification from "../screens/verification";
import Dashboard from "../screens/dashboard";
import viewJob from "../screens/viewJob";
import ViewJob from "../screens/viewJob";

const stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <stack.Navigator
      screenOptions={{
        gestureEnabled: true, 
        animationEnabled: true,
      }}
    >
      <stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="login"
        component={LogIn}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="confirm"
        component={Confirm}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="signup"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="nextsignup"
        component={NextSignUp}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="verify"
        component={Verification}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="jobdescription"
        component={ViewJob}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default StackNavigation;
