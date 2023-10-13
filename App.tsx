/* eslint-disable react/style-prop-object */
import { GluestackUIProvider, config } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { CharactersProvider } from 'contexts/CharactersContext';
import { EpisodesProvider } from 'contexts/EpisodesContext copy';
import { LocationsProvider } from 'contexts/LocationsContext';
import Routes from 'routes/index';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config.theme}>
        <CharactersProvider>
          <EpisodesProvider>
            <LocationsProvider>
              <Routes />
            </LocationsProvider>
          </EpisodesProvider>
        </CharactersProvider>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </NavigationContainer>
  );
};

export default App;
