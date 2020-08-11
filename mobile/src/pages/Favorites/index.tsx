import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';

// import { Container } from './styles';

const Favorites: React.FC = () => {
  return (
    <View  style={styles.container}>
      <PageHeader title='Meus Proffys Favoritos'/>
    </View>
);
}

export default Favorites;