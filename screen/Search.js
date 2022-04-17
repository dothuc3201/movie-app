import React from 'react';
import { render } from 'react-dom';
import { StyleSheet,View, Text,Image } from 'react-native';
import { search, movie } from '../mockData';
import Film from '../components/Film';
function Search({route}) {
    const {Search} = search;
    const searchString = route.params;
    const searchArr = Search.filter(c => c.Title.includes(searchString));
    return ( 
        <View>
            {console.log(Search[0].Title.includes(searchString))}
            {searchArr.map(film => <Film searchFilm={film} key={film.imdbID}></Film>)}
        </View>
     );
}

export default Search;