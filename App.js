import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <AppNavigation />
      </AppProvider>
    </NavigationContainer>
  );
}
