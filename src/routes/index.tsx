import { ParamListBase } from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { CharactersScreen } from 'screens/CharactersScreen';
import { CharacterType } from 'types/CharacterType';

export type RootStackParamsListType = {
  Characters: NativeStackScreenProps<ParamListBase>;
  Character: {
    character: CharacterType;
  };
};

const Stack = createNativeStackNavigator<RootStackParamsListType>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Characters" component={CharactersScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
