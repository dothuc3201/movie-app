import React from 'react';
import { render } from 'react-dom';
import { StyleSheet,View, Text, Image, } from 'react-native';
import { SearchBar } from 'react-native-screens';

function Film (props) {
    return(
      <View style={styles.container}>
        <Image
          style={{
            width: 120,
            height: '100%',
          }}
          source={{uri:props.searchFilm.Poster}}
        />
        <View style={styles.containerCenter}>
          <Text style={styles.textTitle}>{props.searchFilm.Title}</Text>
          <Text style={styles.textDuration}>2h 5m</Text>
          <Text style={styles.textGender}>{props.searchFilm.Type}</Text>
        </View>
    </View>
    )
}

export default Film;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      marginVertical: 10,
    },
    containerCenter: {
      flex: 1,
      position: 'relative',
      padding: 25,
      paddingBottom: 50,
    },
    containerValuation: {
      position: 'absolute',
      bottom: 0,
      left: -10,
    },
    containerBookmark: {
      alignItems: 'flex-end',
      paddingTop: 25,
    },
    containerCinema: {
      position: 'absolute',
      bottom: 0,
      left: 80,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 1,
    },
    textTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textDuration: {
      color: 'gray',
      fontSize: 15,
      fontWeight: '400',
      paddingBottom: 10,
    },
    textGender: {
      color: 'orange',
      fontSize: 16,
      fontWeight: '400',
    },
  });