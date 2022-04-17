import * as React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import ListFilm from '../components/ListFilm';

function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
    return(
    
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>  
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onSubmitEditing={() => navigation.navigate('Search', searchQuery)}
          />    
          <View style={styles.containerTitle}>
            
            <Text style={styles.title}>List</Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Details')}
            >Movie</Text>
          </View>
          <ListFilm />
          <StatusBar style="light" />
        </View>
      </ScrollView>
    
    )
}

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30,
      overflow: 'hidden',
      maxWidth: '100%',
    },
    containerTitle: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingVertical: 15,
    },
    title: {
      flex: 1,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    link: {
      color: 'orange',
      fontWeight: 'bold',
      fontSize: 18,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    }
  });