
import React from "react";
import { StatusBar, LogBox, View, Platform, StyleSheet } from "react-native";
import Routing from "./src/boot/routing";
import { normalized } from "./src/utils/AppConstants";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import store from './src/redux/store'
import { Provider as StoreProvider } from 'react-redux';

LogBox.ignoreAllLogs(true);

// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
          <Routing />
        </View>
      </QueryClientProvider>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" && normalized.hp("5%"),
  },
});

export default App;
