import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F0F0F7',
        flex: 1,
    },
    teacherList:{
        marginTop:-40,
        
    },
    searchForm:{
        marginBottom:8,
    },
    label:{
        color:'#d4c2ff',
        fontFamily:'Poppins_400Regular'
    },
    input:{
        height:54,
        backgroundColor:'#fff',
        borderRadius:8,
        justifyContent:'center',
        paddingHorizontal:16,
        marginTop:4,
        marginBottom:16,
    },
    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    inputBlock:{
        width:'48%'
    },
    submitButton:{
        backgroundColor:'#04d361',
        height:54,
        flexDirection:'row',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',

    },
    submitButtonText:{
        color:'#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize:16,
    }
});

export default styles;