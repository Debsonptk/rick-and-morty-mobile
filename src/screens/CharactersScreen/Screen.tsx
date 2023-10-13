import { Text, View } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCharacters } from 'contexts/CharactersContext';
import { RootStackParamsListType } from 'routes/index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseCharacterType = NativeStackScreenProps<
  RootStackParamsListType,
  'Characters'
>;

const Screen: React.FC<BaseCharacterType> = ({ navigation }) => {
  const { isLoading, characters, fetchCharacters } = useCharacters();

  return (
    <View>
      <Text>Characters</Text>
    </View>
  );
};

export default Screen;
