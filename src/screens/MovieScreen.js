import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function MovieScreen() {

    const [movie, setMovie] = useState({});

    const getMovieInfo = () => {
        return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7a8f9d22&t')
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
        <View>
            <Text>{movie.Title}, {movie.Year}</Text>
        </View>
    )
}

