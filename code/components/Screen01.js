import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>A premium online store for{"\n"}sporter and their stylish choice</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/bifour_-removebg-preview.png')}>
        </Image>
      </View>
      <Text style={styles.nameText}>POWER BIKE{"\n"}SHOP</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
  headerText:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 26
  },
  imageContainer: {
    backgroundColor: '#E941411A',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 350
  },
  nameText:{
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 700,
  },
  button:{
    width: '100%',
    backgroundColor: '#E94141',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  buttonText:{
    fontFamily:'VT323',
    fontWeight: 400,
    fontSize: 20,
    color: '#FEFEFE'
  }
});
