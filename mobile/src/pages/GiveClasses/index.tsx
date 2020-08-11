import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import styles from '../GiveClasses/styles'

import bgImage from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function GiveClasses() {
    const {goBack} = useNavigation();
    function handleNavigateBack(){
        goBack();
    }
    return (
        <View style={styles.container}>
           <ImageBackground 
           source={bgImage} 
           style={styles.container}
           resizeMode='contain'>
               <Text style={styles.title}>Quer ser um Proffy?</Text>
               <Text style={styles.description}>
                   Para começar, você precisa se cadastrar com professor na nossa plataforma web.
               </Text>

           </ImageBackground>
           <RectButton style={styles.okButton}
           onPress={handleNavigateBack}>
               <Text style={styles.okButtonText}>Tudo bem</Text>
           </RectButton>
        </View>
    )
}
