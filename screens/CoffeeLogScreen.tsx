import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ScrollView, StatusBar, View} from 'react-native';
import {Appbar, Button, IconButton, Text, useTheme} from 'react-native-paper';
import AppImage from '../components/AppImage';
import CustomLogCard from '../components/CustomLogCard';
import {ScreenNavigationProp} from '../navigation/type';

const CoffeeLogScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const theme = useTheme();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleTrash = () => {
    console.log('Log deleted');
  };

  const headercomponent = () => {
    return (
      <View
        style={{
          backgroundColor: theme.dark ? '#6e0950' : '#c42b84',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(255, 105, 180, 0.2)',
            borderRadius: 50,
            width: 60,
            height: 60,
            paddingLeft: 13,
            paddingTop: 13,
          }}>
          <AppImage
            source={require('../Images/sparkler.png')}
            width={30}
            height={30}
            style={{paddingLeft: 10}}
          />
        </View>
        <Text
          style={{
            fontSize: 35,
            color: 'white',
            fontWeight: 'bold',
            marginTop: '2%',
          }}>
          Coffee Log
        </Text>
        <Button
          style={{
            backgroundColor: 'rgba(255, 192, 203, 0.2)',
            margin: '4%',
            width: '80%',
            borderRadius: 3,
          }}
          textColor="#ffffff">
          Log my Daily Brews
        </Button>
      </View>
    );
  };

  const data = [
    {
      id: 1,
      coverSource: require('../Images/fire.png'),
      title: 'Cooking Log',
      subtitle: 'What did you Make for dinner?',
      backgroundColor: '#e96d07',
    },
    {
      id: 2,
      coverSource: require('../Images/moon.png'),
      title: 'Dream Journal',
      subtitle: 'What was your dream about?',
      backgroundColor: '#c71e1e',
    },
    {
      id: 3,
      coverSource: require('../Images/mood-swings.png'),
      title: 'Mood Tracking',
      subtitle: 'How are you feeling',
      backgroundColor: '#ffc423',
    },
    {
      id: 4,
      coverSource: require('../Images/book.png'),
      title: 'Book Reviews',
      subtitle: 'How was that book?',
      backgroundColor: '#0fa3dd',
    },
    {
      id: 5,
      coverSource: require('../Images/bookmark.png'),
      title: 'Bookmarks',
      subtitle: 'Where did you leave off?',
      backgroundColor: 'green',
    },
    {
      id: 6,
      coverSource: require('../Images/film.png'),
      title: 'Film Log',
      subtitle: 'What did you watch last night?',
      backgroundColor: '#ac0d84',
    },
    {
      id: 7,
      coverSource: require('../Images/coffee-cup.png'),
      title: 'Coffee Tasting',
      subtitle: "What's brewing this morning?",
      backgroundColor: '#8f4b14',
    },
    {
      id: 8,
      coverSource: require('../Images/thumbtacks.png'),
      title: 'ToDo',
      subtitle: 'What do you need to do?',
      backgroundColor: '#2b740f',
    },
    {
      id: 9,
      coverSource: require('../Images/code.png'),
      title: 'Code Log',
      subtitle: 'What code did you write yesterday?',
      backgroundColor: '#0fa3dd',
    },
    {
      id: 10,
      coverSource: require('../Images/walking.png'),
      title: 'Go for a Walk',
      subtitle: 'Did you go for a walk?',
      backgroundColor: '#ffc423',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.dark ? '#36343a' : 'white',
      }}>
      <Appbar.Header
        style={{backgroundColor: theme.dark ? '#6e0950' : '#c42b84'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <IconButton
            icon="chevron-left"
            size={40}
            onPress={handleBack}
            iconColor="white"
            style={{marginLeft: 0}}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: 'white',
            }}>
            Edit Log
          </Text>
          <IconButton
            icon="trash-can"
            size={30}
            onPress={handleTrash}
            iconColor="white"
          />
        </View>
      </Appbar.Header>
      <StatusBar backgroundColor={theme.dark ? '#6e0950' : '#c42b84'} />

      <FlatList
        ListHeaderComponent={headercomponent}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CustomLogCard
            coverSource={item.coverSource}
            title={item.title}
            subtitle={item.subtitle}
            bgColor={item.backgroundColor}
            theme={theme}
          />
        )}
      />
    </View>
  );
};

export default CoffeeLogScreen;
