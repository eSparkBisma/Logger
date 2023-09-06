import React from 'react';
import {View, Text, ImageSourcePropType} from 'react-native';
import AppImage from './AppImage'; // Adjust the import path as needed
import {IconButton} from 'react-native-paper';

interface LogProps {
  imageSource: ImageSourcePropType;
  title: string;
  entryCount: number;
  latestEntryTime: string;
}

const Log: React.FC<LogProps> = ({
  imageSource,
  title,
  entryCount,
  latestEntryTime,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'pink',
        padding: 5,
        margin: 5,
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '75%',
        }}>
        <AppImage source={imageSource} width={50} height={50} />
        <View style={{paddingLeft: 10}}>
          <Text style={{fontSize: 22}}>{title}</Text>
          <Text>{entryCount} Entries</Text>
          <Text>Latest Entry {latestEntryTime}</Text>
        </View>
      </View>

      <IconButton
        icon="chevron-right"
        size={50}
        onPress={() => {
          console.log('log arrow pressed');
        }}
      />
    </View>
  );
};

export default Log;
