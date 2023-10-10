import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharactersScreen } from 'screens/CharactersScreen';

const Stack = createNativeStackNavigator();

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
