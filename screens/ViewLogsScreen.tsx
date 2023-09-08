import React from 'react';
import LogHead from '../components/LogHead';
import {FlatList, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Log from '../components/Log';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../navigation/type';

interface LogData {
  key: string;
  imageSource: any; // You can replace 'any' with a more specific type if you have one.
  title: string;
  entryCount: number;
  latestEntryTime: string;
  backgroundColor: string;
}

const ViewLogsScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handlePress = (item: LogData) => {
    if (item.key === '1') {
      navigation.navigate('CoffeeLogScreen'); // Navigate to CoffeeLogScreen
    } else {
      console.log('navigation has not been applied here!');
    }
  };
  const theme = useTheme();

  const data: LogData[] = [
    {
      key: '1',
      imageSource: require('../Images/sparkler.png'),
      title: 'Coffee Log',
      entryCount: 55,
      latestEntryTime: '50 seconds ago',
      backgroundColor: '#e96d07',
    },
    {
      key: '2',
      imageSource: require('../Images/fire.png'),
      title: "What's For Dinner",
      entryCount: 2,
      latestEntryTime: '59 seconds ago',
      backgroundColor: '#c71e1e',
    },
    {
      key: '3',
      imageSource: require('../Images/people.png'),
      title: 'Contacts',
      entryCount: 54,
      latestEntryTime: '10 minutes ago',
      backgroundColor: '#ffc423',
    },
    {
      key: '4',
      imageSource: require('../Images/walking.png'),
      title: 'What am I wearing',
      entryCount: 17,
      latestEntryTime: '30 seconds ago',
      backgroundColor: '#0fa3dd',
    },
    {
      key: '5',
      imageSource: require('../Images/smartphone.png'),
      title: 'App Ideas',
      entryCount: 10,
      latestEntryTime: '20 days ago',
      backgroundColor: 'green',
    },
    {
      key: '6',
      imageSource: require('../Images/pen.png'),
      title: 'What did I write',
      entryCount: 5,
      latestEntryTime: '15 days ago',
      backgroundColor: '#ac0d84',
    },
    {
      key: '7',
      imageSource: require('../Images/code.png'),
      title: 'What did I code',
      entryCount: 11,
      latestEntryTime: '3 days ago',
      backgroundColor: '#8f4b14',
    },
  ];
  return (
    <View style={{backgroundColor: theme.dark ? '#36343a' : 'white', flex: 1}}>
      <LogHead />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Log
            imageSource={item.imageSource}
            title={item.title}
            entryCount={item.entryCount}
            latestEntryTime={item.latestEntryTime}
            backgroundcolor={item.backgroundColor}
            onPress={() => handlePress(item)}
          />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default ViewLogsScreen;
