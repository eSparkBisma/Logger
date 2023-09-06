// import * as React from 'react';
// import {ScrollView, View, StyleSheet, FlatList} from 'react-native';
// import {Appbar, Card, IconButton, Text} from 'react-native-paper';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import CustomCard from '../components/CustomCard';

// type NewLogScreenProps = {
//   navigation: NativeStackNavigationProp<any>; // You can replace 'any' with your specific stack's navigation type
// };
// const NewLogScreen: React.FC<NewLogScreenProps> = ({navigation}) => {
//   const handleClose = () => {
//     navigation.pop();
//   };

//   // const getRandomColor = () => {
//   //   const letters = '0123456789ABCDEF';
//   //   let color = '#';
//   //   for (let i = 0; i < 6; i++) {
//   //     color += letters[Math.floor(Math.random() * 16)];
//   //   }
//   //   return color;
//   // };
//   const data = [
//     {
//       id: 1,
//       coverSource: require('../Images/fire.png'),
//       title: 'Cooking Log',
//       subtitle: 'What did you Make for dinner?',
//       tintcolor: 'orange',
//     },
//     {
//       id: 2,
//       coverSource: require('../Images/moon.png'),
//       title: 'Dream Journal',
//       subtitle: 'What was your dream about?',
//       tintcolor: '#020261',
//     },
//     {
//       id: 3,
//       coverSource: require('../Images/mood-swings.png'),
//       title: 'Mood Tracking',
//       subtitle: 'How are you feeling',
//       tintcolor: '#e0e000',
//     },
//     {
//       id: 4,
//       coverSource: require('../Images/book.png'),
//       title: 'Book Reviews',
//       subtitle: 'How was that book?',
//     },
//     {
//       id: 5,
//       coverSource: require('../Images/bookmark.png'),
//       title: 'Bookmarks',
//       subtitle: 'Where did you leave off?',
//       tintcolor: '#d1770f',
//     },
//     {
//       id: 6,
//       coverSource: require('../Images/film.png'),
//       title: 'Film Log',
//       subtitle: 'What did you watch last night?',
//       tintcolor: '#580358',
//     },
//     {
//       id: 7,
//       coverSource: require('../Images/coffee-cup.png'),
//       title: 'Coffee Tasting',
//       subtitle: "What's brewing this morning?",
//     },
//     {
//       id: 8,
//       coverSource: require('../Images/thumbtacks.png'),
//       title: 'ToDo',
//       subtitle: 'What do you need to do?',
//     },
//     {
//       id: 8,
//       coverSource: require('../Images/code.png'),
//       title: 'Code Log',
//       subtitle: 'What code did you write yesterday?',
//       tintcolor: '#07615cda',
//     },
//     {
//       id: 9,
//       coverSource: require('../Images/walking.png'),
//       title: 'Go for a Walk',
//       subtitle: 'Did you go for a walk?',
//       tintcolor: '#e7da27',
//     },
//   ];

//   return (
//     <View>
//       <Appbar.Header>
//         <IconButton icon="close-circle" size={26} onPress={handleClose} />
//         <Appbar.Content title="Start a new log" />
//       </Appbar.Header>
//       {/* making half of the text bold only */}
//       <ScrollView>
//         <Text style={{padding: 15, fontSize: 28}}>
//           <Text style={{fontWeight: 'bold'}}>
//             A Log is a journal with purpose.
//           </Text>{' '}
//           You can log anything you want, with as much detail as you want.
//         </Text>
//         <Text
//           style={{
//             padding: 15,
//             paddingTop: 20,
//             fontSize: 20,
//             fontWeight: 'bold',
//           }}>
//           Pick a template, or build your own custom Log from scratch.
//         </Text>
//         <FlatList
//           style={{marginBottom: '5%'}}
//           data={data}
//           keyExtractor={item => item.id.toString()}
//           numColumns={2}
//           overScrollMode="never"
//           renderItem={({item}) => (
//             <CustomCard
//               coverSource={item.coverSource}
//               title={item.title}
//               subtitle={item.subtitle}
//               tintColor={item.tintcolor}
//             />
//           )}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   grid: {},
// });

// export default NewLogScreen;

import * as React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import {Appbar, IconButton, Text} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomCard from '../components/CustomCard';

type NewLogScreenProps = {
  navigation: NativeStackNavigationProp<any>; // You can replace 'any' with your specific stack's navigation type
};

const NewLogScreen: React.FC<NewLogScreenProps> = ({navigation}) => {
  const handleClose = () => {
    navigation.pop();
  };

  const data = [
    {
      id: 1,
      coverSource: require('../Images/fire.png'),
      title: 'Cooking Log',
      subtitle: 'What did you Make for dinner?',
      tintcolor: 'orange',
    },
    {
      id: 2,
      coverSource: require('../Images/moon.png'),
      title: 'Dream Journal',
      subtitle: 'What was your dream about?',
      tintcolor: '#020261',
    },
    {
      id: 3,
      coverSource: require('../Images/mood-swings.png'),
      title: 'Mood Tracking',
      subtitle: 'How are you feeling',
      tintcolor: '#e0e000',
    },
    {
      id: 4,
      coverSource: require('../Images/book.png'),
      title: 'Book Reviews',
      subtitle: 'How was that book?',
    },
    {
      id: 5,
      coverSource: require('../Images/bookmark.png'),
      title: 'Bookmarks',
      subtitle: 'Where did you leave off?',
      tintcolor: '#d1770f',
    },
    {
      id: 6,
      coverSource: require('../Images/film.png'),
      title: 'Film Log',
      subtitle: 'What did you watch last night?',
      tintcolor: '#8d2461',
    },
    {
      id: 7,
      coverSource: require('../Images/coffee-cup.png'),
      title: 'Coffee Tasting',
      subtitle: "What's brewing this morning?",
    },
    {
      id: 8,
      coverSource: require('../Images/thumbtacks.png'),
      title: 'ToDo',
      subtitle: 'What do you need to do?',
    },
    {
      id: 8,
      coverSource: require('../Images/code.png'),
      title: 'Code Log',
      subtitle: 'What code did you write yesterday?',
      tintcolor: '#07615cda',
    },
    {
      id: 9,
      coverSource: require('../Images/walking.png'),
      title: 'Go for a Walk',
      subtitle: 'Did you go for a walk?',
      tintcolor: '#e7da27',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Appbar.Header mode="center-aligned">
        <IconButton icon="close-circle" size={26} onPress={handleClose} />
        <Appbar.Content title="Start a new log" />
      </Appbar.Header>
      <ScrollView>
        <Text style={{padding: 15, fontSize: 28}}>
          <Text style={{fontWeight: 'bold'}}>
            A Log is a journal with purpose.
          </Text>{' '}
          You can log anything you want, with as much detail as you want.
        </Text>
        <Text
          style={{
            padding: 15,
            paddingTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Pick a template, or build your own custom Log from scratch.
        </Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          renderItem={({item}) => (
            <CustomCard
              coverSource={item.coverSource}
              title={item.title}
              subtitle={item.subtitle}
              tintColor={item.tintcolor}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {},
});

export default NewLogScreen;
