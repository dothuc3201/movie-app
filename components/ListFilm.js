import React from 'react';
import { render } from 'react-dom';
import { StyleSheet,View, Text,Image } from 'react-native';
import { SearchBar } from 'react-native-screens';
import { search, movie } from '../mockData';
import Film from './Film';
function ListFilm ()  {
    const {Search} = search;
    return(
        <View >
            {Search.map(searchFilm => <Film searchFilm={searchFilm} key={searchFilm.imdbID}></Film>)}
        </View>
    )
}

export default ListFilm;