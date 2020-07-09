import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';

const Main = () => {
  return (
    <ImageBackground
      blurRadius={0}
      borderRadius={0}
      source={require('../../Assets/background3.jpg')}
      style={styles.main}>
      <View style={styles.image}>
        <Image source={require('../../Assets/logo1.png')} style={styles.logo} />
        {/* <Text style={styles.imgtext}>Shivam Srivastava</Text> */}
      </View>
      <Text style={styles.text1}>Collect your Inspiration</Text>
      <Text style={styles.text2}>
        With our App you have allow to huge collection of amazing works
      </Text>
      <Text style={styles.button}>Get Starded</Text>
      <Text style={styles.dash}>...</Text>
    </ImageBackground>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    fontFamily: 'lato',
  },
  text1: {
    fontSize: 45,
    marginBottom: 10,
    width: '60%',
    fontWeight: '300',
    color: '#dfd3c3',
    // backgroundColor: '#ffffff40',
    alignItems: 'center',
    textAlign: 'center',
  },
  text2: {
    marginBottom: 40,
    color: '#dfd3c3',
    width: '75%',
    fontWeight: '100',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    // width: 180,
    // height: 50,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    color: '#2f2519',
    fontSize: 25,
    fontWeight: 'bold',
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fa7d09',
    // textAlign: 'center',
    marginBottom: 50,
  },
  image: {
    position: 'absolute',
    top: StatusBar.length,
    margin: 50,
    // backgroundColor: 'red',
    fontFamily: 'montserrat',
    alignItems: 'center',
  },
  imgtext: {
    color: '#fff',
    fontSize: 20,
    marginTop: 0,
    // backgroundColor: '',
    // padding: 5,
    // borderRadius: 7,
  },
  dash: {
    color: '#fff',
    fontSize: 50,
  },
});
