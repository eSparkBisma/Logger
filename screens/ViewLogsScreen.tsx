import React from 'react';
import LogHead from '../components/LogHead';

import {FlatList} from 'react-native';
import Log from '../components/Log';
import {useNavigation} from '@react-navigation/native';

const ViewLogsScreen = () => {
  const data = [
    {
      key: '1',
      imageSource: require('../Images/sparkler.png'),
      title: 'Coffee Log',
      entryCount: 55,
      latestEntryTime: '50 seconds ago',
    },
    {
      key: '2',
      imageSource: require('../Images/fire.png'),
      title: "What's For Dinner",
      entryCount: 2,
      latestEntryTime: '59 seconds ago',
    },
    {
      key: '3',
      imageSource: require('../Images/people.png'),
      title: 'Contacts',
      entryCount: 54,
      latestEntryTime: '10 minutes ago',
    },
    {
      key: '4',
      imageSource: require('../Images/walking.png'),
      title: 'What am I wearing',
      entryCount: 17,
      latestEntryTime: '30 seconds ago',
    },
    {
      key: '5',
      imageSource: require('../Images/smartphone.png'),
      title: 'App Ideas',
      entryCount: 10,
      latestEntryTime: '20 days ago',
    },
    {
      key: '6',
      imageSource: require('../Images/pen.png'),
      title: 'What did I write',
      entryCount: 5,
      latestEntryTime: '15 days ago',
    },
    {
      key: '7',
      imageSource: require('../Images/code.png'),
      title: 'What did I code',
      entryCount: 11,
      latestEntryTime: '3 days ago',
    },
  ];
  const navigation = useNavigation();

  const handlePress = item => {
    if (item.key === '1') {
      navigation.navigate('CoffeeLogScreen'); // Navigate to CoffeeLogScreen
    }
  };

  return (
    <>
      <LogHead />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Log
            imageSource={item.imageSource}
            title={item.title}
            entryCount={item.entryCount}
            latestEntryTime={item.latestEntryTime}
            onPress={handlePress(item)}
          />
        )}
        keyExtractor={item => item.key}
      />
    </>
  );
};

export default ViewLogsScreen;
