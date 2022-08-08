import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar';

export default function MovieScreen() {

    const [movie, setMovie] = useState({});

    const getMovieInfo = () => {
        return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=466b918a')
          .then((response) => {
            if(response.ok) {
              return response.json();
            }
            return {};
          })
          .then((json) => {
            setMovie(json);
          })
          .catch((error) => {
            console.log('Something went wrong', error);
          })
      }

      useEffect(() => {
        getMovieInfo();
      }, [])

    return (
        <View style={styles.container}>
            <SearchBar />
            <Text style={styles.movieTitle}>{movie.Title}, {movie.Year} </Text>
            <Text style={styles.movieTitle}>Rated:{movie.Rated}</Text>
            <Image 
              style={styles.posterImage}
              source={{uri: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"}}
            />
            <Text style={styles.text}>{movie.Plot}</Text>
            <Text>Ratings</Text>
            <Text>IMDB: {movie.imdbRating}</Text>
            <Text>Metascore: {movie.Metascore}</Text>   
        </View>
    )
}

const styles= StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  movieTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  posterImage: {
    marginTop: 15,
    width: 200,
    borderWidth: 4,
    borderColor: '#080808',
    height: 400
  },
  container: {
    padding: 40,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'grey'
  }
})

