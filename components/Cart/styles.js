import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,

        backgroundColor: '#2A2A2A'
    },
    list:{
        width: '95%',
        alignSelf: "center"
    },
    Items:{
        justifyContent: "center",
        alignSelf: "center",

        width: '100%',

        marginTop: 10,

        borderRadius: 10,

        backgroundColor: '#1E1E1E',
        padding: 10
    },
    wrapperItems:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    innerItems:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    texts:{
        flexDirection: "column",
        marginLeft: 20
    },
    coverImage:{
        width: 60,
        height: 80 
    },
    gameName:{
        color: '#fff',
        fontSize: 16,
    },
    priceName:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    removeIcon:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnRemove:{
        justifyContent: "center",
        alignItems: "center",

        width: 20,
        height: 20,
    },

    checkout:{
        alignSelf: "center",
        width: '95%'  
    },
    line:{
        height: 3,
        width: '100%',

        marginVertical: 20,

        backgroundColor: '#fff',

        borderRadius: 10
    },
    wrapperTexts:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    checkoutText:{
        marginBottom: 10,

        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnBuy:{
        justifyContent: "center",
        alignItems: "center",

        width: '100%',
        height: 40,

        marginTop: 10,

        borderRadius: 15,

        backgroundColor: '#487714'
    },
    btnText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }

})