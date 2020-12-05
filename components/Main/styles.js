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
        top: 10,
        right: 3,

        justifyContent: "center",
        alignItems: "center",

        width: 22,
        height: 22,
        
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
        height: 250,
        justifyContent:"center",
        alignItems: "center"
    },
    title:{
        marginVertical: 10,
        marginBottom: 20,

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

        padding: 10,

        borderRadius: 5,

        backgroundColor: '#0b92bf'
    },
    FilterText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '100'
    },
    gamesList:{
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: 'center',
        
        width: '100%',
    },
    ScrollWrapper:{
        flexDirection: 'column',
        justifyContent: "center",
    
        width: '42%',
    
        marginTop: 60,
    
        borderRadius: 20,
        
        backgroundColor: '#1E1E1E',
        
    },
    innerItems:{
        flexDirection: 'row',
        flexGrow: 1,
    },
    itemRate:{
        justifyContent: 'center',
        alignItems: 'center',
        
        width: 50,
        height: 50,
        
        marginLeft: -10,
        marginRight: 15,
        marginTop: -15,
        
        borderRadius: 40,
        backgroundColor: '#d6b617',
        zIndex: 10
    },
    green:{
        backgroundColor: 'green',
    },
    orange:{
        backgroundColor: '#ba6c1a',
    },
    red:{
        backgroundColor: 'red',
    },
    itemText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    cover:{
        height: 120,
        width: 95,

        marginTop: -40,
        marginLeft: -5,
    },
    gameName:{
        alignSelf: "center",
        textAlignVertical: "center",

        width: '80%',
        height: 40,

        marginTop: 10,

        color: '#fff',
        fontSize: 17,
        textAlign: "center"
    },
    gamePrice:{
        alignSelf: "center",

        width: '80%',

        marginVertical: 3,

        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: "center"
    },
    buttomToCart:{
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',

        width: '90%',
        height: 25,

        marginBottom: 15,
        marginTop: 10,

        borderRadius: 22,

        backgroundColor: '#487714'
    },
    buttomToCartText:{
        color: '#fff',
        fontSize: 15,
    },


})