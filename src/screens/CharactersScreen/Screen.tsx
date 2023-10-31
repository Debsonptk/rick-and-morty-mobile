import { useCallback, useEffect } from 'react';
import { Text, View } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CharacterCard } from 'components/CharacterCard';
import { useCharacters } from 'contexts/CharactersContext';
import { RootStackParamsListType } from 'routes/index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseCharacterType = NativeStackScreenProps<
  RootStackParamsListType,
  'Characters'
>;

const Screen: React.FC<BaseCharacterType> = ({ navigation }) => {
  const { isLoading, characters, fetchCharacters } = useCharacters();

  const Header = useCallback(
    () => (
      <View my={40}>
        <Text fontSize={24} bold lineHeight={31.2}>
          Choose your favorite character
        </Text>
      </View>
    ),
    [],
  );

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>
        {isLoading && <Text>Loading...</Text>}
        <FlatList
          ListHeaderComponent={Header}
          contentContainerStyle={{ marginHorizontal: 16 }}
          numColumns={2}
          data={characters}
          renderItem={({ item }) => (
            <CharacterCard
              character={item}
              onPress={() =>
                navigation.navigate('Character', {
                  character: item,
                })
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen;
