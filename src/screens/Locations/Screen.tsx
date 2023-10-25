import { useEffect } from 'react';
import { Text, View } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLocations } from 'contexts/LocationsContext';
import { RootStackParamsListType } from 'routes/index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BaseLocationsType = NativeStackScreenProps<
  RootStackParamsListType,
  'Locations'
>;

const Screen: React.FC<BaseLocationsType> = () => {
  const { isLoading, locations, fetchLocations } = useLocations();

  useEffect(() => {
    fetchLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && locations && <Text>Locations</Text>}
    </View>
  );
};

export default Screen;
