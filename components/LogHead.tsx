import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, MD3Colors, Text} from 'react-native-paper';

const LogHead = () => {
  return (
    <View style={styles.head}>
      <IconButton
        icon="cog"
        size={38}
        onPress={() => {
          console.log('Settings button pressed');
        }}
      />
      <Text style={{alignSelf: 'center', fontWeight: '900', fontSize: 38}}>
        Logs.
      </Text>
      <IconButton
        icon="plus-circle"
        size={38}
        onPress={() => {
          console.log('Add button pressed');
        }}
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
