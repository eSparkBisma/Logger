import { DefaultTheme,  MD3DarkTheme} from "react-native-paper";

export const lightTheme ={
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ffffff',
      accent: '#f1c40f',
      background: '#ffffff',
      surface: '#ffffff',
      text: '#333333',
    }
}

export const darkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#ffffff',
      accent: '#f1c40f',
      background: '#121212',
      surface: '#333333',
      text: '#ffffff',
    },
  };