import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default class Topic1 extends React.Component {
    render() {
    return (
        <View style={styles.container}>
        <ScrollView style={{height:'100%', width:'100%'}}>
            <View style={styles.top}>
                <View style={styles.profileimage}>
                {/*<Image
                    style={{position:'relative'}}
                    source={require('./pngtree.png')}
                />
                */}
                </View>
            </View>

            <View style={styles.center}></View>
            <Text style={styles.text1}>CAMP FUN!
                <Text style={styles.text2}>
                    Activity holidays for you.
                    <Text style={styles.text3}>
                        Do you want to have a fantastix holiday?
                    </Text>
                </Text>
            </Text>
            
            <View style={styles.boxes}>
                <View style={styles.boxesItem}>
                    <View style={styles.boxesItemInner}></View>
                </View>
                <View style={styles.boxesItem}>
                    <View style={styles.boxesItemInner}></View>
                </View>
                <View style={styles.boxesItem}>
                    <View style={styles.boxesItemInner}></View>
                </View>
                <View style={styles.boxesItem}>
                    <View style={styles.boxesItemInner}></View>
                </View>
            </View>
            
            <Image
            style={{width: '100%', height: 90}}
            source={{uri: 'https://blog.red-badger.com/hubfs/Imported_Blog_Media/ZB8O0DL-2.jpg?t=1541769922971'}}
            />

            <Text style={styles.text1}>Horizontal Scrolling:</Text>  

            <View style={{height:300, marginTop:10}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Image
                    style={styles.imageHorizontal}
                    source={require('./pngtree.png')}
                />
                <Image
                    style={styles.imageHorizontal}
                    source={require('./pngtree.png')}
                />
                <Image
                    style={styles.imageHorizontal}
                    source={require('./pngtree.png')}
                />
                <Image
                    style={styles.imageHorizontal}
                    source={require('./pngtree.png')}
                />
                <Image
                    style={styles.imageHorizontal}
                    source={require('./pngtree.png')}
                />
                </ScrollView>
            </View>          
        </ScrollView>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    top:{
        height: 700,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98d2c1'
    },
    
    profileimage:{
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#eee',
    },
    
    center:{
        height:'10%',
        backgroundColor: '#7fbcac'
    },
    
    boxes:{
        height: 450,
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 3,
    },
    
    boxesItem:{
        width: '50%',
        height: '50%',
        padding: 3,
    },
    
    boxesItemInner:{
        flex: 1,
        backgroundColor: '#292929',
    },
    
    text1:{
        fontSize: 40,
        fontFamily: 'sans-serif-thin',
        color: 'green',
        fontWeight:'bold',
        marginTop: 5,
    },
    
    text2:{
        fontSize: 20,
        fontFamily: 'monospace',
        color: 'black',
    },
    
    text3:{
        fontSize: 15,
        color: 'green',
    },

    imageHorizontal:{
        height:130,
        width: 130,
        marginLeft: 15,
    }
});
