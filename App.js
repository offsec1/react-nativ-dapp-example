import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MoralisProvider } from "react-moralis";
import Welcome from './components/Welcome';

// this is just the landing page when you open the app
export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Open up Welcome.js to see how moralis is used!</Text>
      <MoralisProvider appId={props.appId} serverUrl={props.serverUrl}>
        <Welcome />
      </MoralisProvider>
      <StatusBar style="auto" />
    </View>
  );
}

// style your application
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// create .env file for environment variables
App.defaultProps = {
  appId: process.env.MORALIS_APP_ID,
  serverUrl: process.env.MORALIS_URL
};