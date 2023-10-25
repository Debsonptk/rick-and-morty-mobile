import { useEffect } from 'react';
import { Text, View } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCharacters } from 'contexts/CharactersContext';
import { RootStackParamsListType } from 'routes/index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseCharacterType = NativeStackScreenProps<
  RootStackParamsListType,
  'Character'
>;

const Screen: React.FC<BaseCharacterType> = () => {
  const { isLoading, characters, fetchCharacters } = useCharacters();

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && characters && (
        <View pt={10}>
          <Text>Character</Text>
        </View>
      )}
    </View>
  );
};

export default Screen;
