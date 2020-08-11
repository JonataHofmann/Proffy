import React, { useState, useEffect } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import {useFocusEffect} from '@react-navigation/native'

// import { Container } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response =>{
      if(response){
        setFavorites( JSON.parse(response));
      }
    })
  }

  useFocusEffect(()=>{
    loadFavorites();
  })

  return (
    <View  style={styles.container}>
      <PageHeader title='Meus Proffys Favoritos'/>
      <ScrollView style={styles.teacherList} contentContainerStyle={{
              paddingHorizontal:16,
              paddingBottom:16
            }}>


              {favorites.map((teacher: Teacher)=><TeacherItem key={teacher.id} teacher={teacher} favorited/>)}

            </ScrollView>
    </View>
);
}

export default Favorites;
