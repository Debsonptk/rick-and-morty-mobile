import { memo } from 'react';
import { Text, View } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { CharacterType } from 'types/CharacterType';

interface ICharacterCardProps {
  character: CharacterType;
  onPress: () => void;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({
  character,
  onPress,
}) => (
  <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={onPress}>
    <View mb={16}>
      <Text>{character.name}</Text>
    </View>
  </TouchableOpacity>
);

export default memo(CharacterCard);
