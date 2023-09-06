import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {Appbar, Button, Card, IconButton, Text} from 'react-native-paper';
import AppImage from '../components/AppImage';

const CoffeeLogScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    // Handle navigation back

    navigation.goBack();
  };

  const handleTrash = () => {
    // Handle the trash button action
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#c42b84" />
      <Appbar.Header style={{backgroundColor: '#c42b84'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <IconButton
            icon="arrow-left"
            onPress={handleBack}
            iconColor="white"
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: 'white',
            }}>
            Edit Log
          </Text>
          <IconButton icon="delete" onPress={handleTrash} iconColor="white" />
        </View>
      </Appbar.Header>
      <View
        style={{
          backgroundColor: '#c42b84',
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
          }}>
          Log my Daily Brews
        </Button>
      </View>
      <Card
        elevation={0}
        style={{
          margin: '5%',
          marginTop: '4%',
          borderRadius: 7,
          shadowColor: 'white',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '15%',
              height: '100%',
              backgroundColor: 'orange',
              borderRadius: 0,
            }}>
            <Card.Cover
              source={require('../Images/sparkler.png')}
              tintColor={'white'}
              style={{
                width: 32,
                height: 32,
                backgroundColor: 'transparent',
                borderRadius: 0,
                marginLeft: '6%',
              }}
            />
          </View>

          <Card.Title
            title={'title'}
            titleStyle={{fontWeight: 'bold'}}
            subtitle={'subtitle'}
          />
        </View>
      </Card>
    </View>
  );
};

export default CoffeeLogScreen;
