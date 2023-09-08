import React from 'react';
import {View} from 'react-native';
import {Card, useTheme} from 'react-native-paper';

interface CustomLogCardProps {
  coverSource?: any; // The source for Card.Cover
  title: string; // The title for Card.Title
  subtitle: string;
  bgColor?: string;
  theme: ReactNativePaper.Theme;
}

const CustomLogCard: React.FC<CustomLogCardProps> = ({
  coverSource,
  title,
  subtitle,
  bgColor,
  theme,
}) => {
  return (
    <Card
      style={{
        // margin: '5%',
        marginHorizontal: '4%',
        marginTop: '2%',
        borderRadius: 7,
        shadowColor: theme.colors.text,
        backgroundColor: theme.dark ? '#25232A' : 'white',
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
            backgroundColor: bgColor,
            borderRadius: 3,
            paddingLeft: '3%',
            paddingTop: '5%',
          }}>
          <Card.Cover
            source={coverSource}
            tintColor={'white'}
            style={{
              width: 32,
              height: 32,
              backgroundColor: 'transparent',
              borderRadius: 0,
            }}
          />
        </View>

        <Card.Title
          title={title}
          titleStyle={{fontWeight: 'bold'}}
          subtitle={subtitle}
        />
      </View>
    </Card>
  );
};

export default CustomLogCard;
