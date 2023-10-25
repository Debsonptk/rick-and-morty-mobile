import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CharacterScreen } from 'screens/CharacterScreen';
import { CharactersScreen } from 'screens/CharactersScreen';
import { EpisodesScreen } from 'screens/EpisodesScreen';
import { LocationsScreen } from 'screens/Locations';
import { CharacterType } from 'types/CharacterType';
import { EpisodeType } from 'types/EpisodeType';
import { LocationType } from 'types/LocationType';

export type RootStackParamsListType = {
  Characters: NativeStackScreenProps<ParamListBase>;
  Character: {
    character: CharacterType;
  };
  Locations: {
    location: LocationType;
  };
  Episodes: {
    episode: EpisodeType;
  };
};

const Tab = createBottomTabNavigator<RootStackParamsListType>();

const TabCharacters: React.FC<{
  color: string;
  size: number;
  focused: boolean;
}> = ({ color, size }) => (
  <MaterialCommunityIcons name="human-male-male" size={size} color={color} />
);

const TabCharacter: React.FC<{
  color: string;
  size: number;
  focused: boolean;
}> = ({ color, size }) => (
  <MaterialCommunityIcons name="human-male" size={size} color={color} />
);

const TabEpisodes: React.FC<{
  color: string;
  size: number;
  focused: boolean;
}> = ({ color, size }) => <Feather name="tv" size={size} color={color} />;

const TabLocations: React.FC<{
  color: string;
  size: number;
  focused: boolean;
}> = ({ color, size }) => <Ionicons name="earth" size={size} color={color} />;

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="Characters"
        component={CharactersScreen}
        options={{
          tabBarIcon: TabCharacters,
        }}
      />
      <Tab.Screen
        name="Character"
        component={CharacterScreen}
        options={{
          tabBarIcon: TabCharacter,
        }}
      />
      <Tab.Screen
        name="Episodes"
        component={EpisodesScreen}
        options={{
          tabBarIcon: TabEpisodes,
        }}
      />
      <Tab.Screen
        name="Locations"
        component={LocationsScreen}
        options={{
          tabBarIcon: TabLocations,
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
