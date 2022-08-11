import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import { Header } from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import { TaskContextProvider } from "./src/contexts/TaskContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Header />
        <TaskContextProvider>
          <Footer />
        </TaskContextProvider>
        <StatusBar style="light" />
      </View>
    </ThemeProvider>
  );
}
