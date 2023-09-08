import React from 'react';
import {View, Text, ImageSourcePropType} from 'react-native';
import AppImage from './AppImage'; // Adjust the import path as needed
import {IconButton, useTheme} from 'react-native-paper';

interface LogProps {
  imageSource: any;
  title: string;
  entryCount: number;
  latestEntryTime: string;
  backgroundcolor: string;
  onPress?: () => void;
}

const Log: React.FC<LogProps> = ({
  imageSource,
  title,
  entryCount,
  latestEntryTime,
  backgroundcolor,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: backgroundcolor,
        padding: '2%',
        marginVertical: '1.5%',
        marginHorizontal: '3%',
        borderRadius: 5,
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '75%',
          paddingLeft: '2%',
        }}>
        <AppImage source={imageSource} width={50} height={50} />
        <View style={{paddingLeft: ' 7%'}}>
          <Text style={{fontSize: 22, fontWeight: '800', color: '#ffffff'}}>
            {title}
          </Text>
          <Text style={{fontWeight: '800', color: '#ffffff'}}>
            {entryCount} Entries
          </Text>
          <Text style={{color: '#ffffff'}}>Latest Entry {latestEntryTime}</Text>
        </View>
      </View>

      <IconButton
        icon="chevron-right"
        size={50}
        onPress={onPress}
        iconColor="#ffffff"
        style={{paddingLeft: '7%'}}
      />
    </View>
  );
};

export default Log;
