import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet} from 'react-native';
import Film from '../components/Film';
import { search, movie } from '../mockData';

function DetailsScreen() {
  const {Movie} = movie;
    return (
      <View>
        <Film searchFilm={Movie} key={Movie.imdbID}></Film>
      </View>
    );
  }

export default DetailsScreen;