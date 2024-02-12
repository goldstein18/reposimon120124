/*
 * This project is created and maintained by:
 * React Native Team
 * 724.One
 *
 * Project Description:
 * A cross-platform mobile application developed using React Native,
 *
 * For support and inquiries, please contact:
 * - Email: contact@724.one
 *
 * @format
 */
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
