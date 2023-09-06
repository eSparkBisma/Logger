import React from 'react';
import {View} from 'react-native';
import {Card, IconButton} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

interface CustomCardProps {
  coverSource?: any; // The source for Card.Cover
  title: string; // The title for Card.Title
  subtitle: string;
  tintColor?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  coverSource,
  title,
  subtitle,
  tintColor,
}) => {
  return (
    <Card style={{margin: '2%', marginTop: '2%', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1%',
        }}>
        <Card.Cover
          source={coverSource}
          tintColor={tintColor}
          style={{
            width: 32,
            height: 32,
            backgroundColor: 'transparent',
            borderRadius: 0,
            marginLeft: '6%',
          }}
        />
        <IconButton
          icon="arrow-right-circle"
          onPress={() => {
            console.log('card-arrow pressed');
          }}
        />
      </View>
      <Card.Title
        title={title}
        titleStyle={{fontWeight: 'bold'}}
        subtitle={subtitle}
      />
    </Card>
  );
};

export default CustomCard;
