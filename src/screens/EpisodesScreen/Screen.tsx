import { useEffect } from 'react';
import { Text, View } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEpisodes } from 'contexts/EpisodesContext copy';
import { RootStackParamsListType } from 'routes/index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseEpisodeType = NativeStackScreenProps<
  RootStackParamsListType,
  'Episodes'
>;

const Screen: React.FC<BaseEpisodeType> = () => {
  const { isLoading, episodes, fetchEpisodes } = useEpisodes();

  useEffect(() => {
    fetchEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && episodes && (
        <View pt={10}>
          <Text>Episodes</Text>
        </View>
      )}
    </View>
  );
};

export default Screen;
