import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, MD3Colors, Text, useTheme} from 'react-native-paper';

const LogHead = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <View style={styles.head}>
      <IconButton
        icon="cog"
        size={38}
        onPress={() => {
          console.log('Settings button pressed');
        }}
        // iconColor={theme.colors.icon}
        iconColor={theme.dark ? '#ffffff' : '#888888'}
      />
      <Text style={{alignSelf: 'center', fontWeight: '900', fontSize: 38}}>
        Logs.
      </Text>
      <IconButton
        icon="plus-circle"
        size={38}
        onPress={() => {
          navigation.navigate('NewLogScreen');
        }}
        // iconColor={theme.colors.icon}
        iconColor={theme.dark ? '#ffffff' : '#888888'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LogHead;
