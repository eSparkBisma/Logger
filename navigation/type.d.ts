import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ScreenNavigatorParamList={
    ViewLogsScreen: undefined;
    NewLogScreen: undefined;
    CoffeeLogScreen: undefined;

}

export type ScreenNavigationProp = NativeStackScreenProps<ScreenNavigatorParamList, ViewLogsScreen,NewLogScreen,CoffeeLogScreen>