import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        
        backgroundColor: '#2A2A2A'
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        paddingHorizontal: 7,
        paddingVertical: 7

    },
    logo:{
        width: 60,
        height: 60
    },
    headerText:{
        color: '#fff',
        fontSize: 20,
    },
    wrapperCart:{
        alignItems: 'center',
        justifyContent: 'center',

        width: 70,
        height: 70
    },
    circleCartItens:{
        position: 'absolute',
        top: 6,
        right: 3,
        
        backgroundColor: 'red',
        borderRadius: 70,
        
        padding: 2,
        zIndex: 2
    },
    CartText:{
        color: '#fff',

        fontSize: 15,
        fontWeight: 'bold'
    },

    wrapperSwipe:{
        height: 270
    },

    swipper:{},

    slide:{
        height: 250
    },
    slideImage:{
        width: '100%',
        height: 350,  
    },
    title:{
        marginVertical: 15,

        color: '#fff',
        fontSize: 19,
        textAlign: "center"
    },

    filterWrapper:{
        alignSelf: "center",

        width: '90%',

    },
    filterText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '100'
    },
    wrapperButtons:{
        flexDirection: "row",

        width: '100%',

    },
    FilterButton:{
        flexGrow: 1,
        flexBasis: 1,
        justifyContent: "center",
        alignItems: "center",
        
        margin: 4,
        paddingVertical: 6,

        backgroundColor: '#FF7777'
    },
    FilterText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '100'
    }

})