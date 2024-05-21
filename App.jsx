
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import Routes from './src/routes';

export default function App() {
  return (
      <PaperProvider>
        <Routes/>
      </PaperProvider>
  );
}