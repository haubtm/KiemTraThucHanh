import { Text, View, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';

const item = [
  {
    id: 1,
    image: './assets/bifour_-removebg-preview.png'
  },
  {
    id: 2,
    image: './assets/bifour_-removebg-preview.png'
  },
  {
    id: 3,
    image: './assets/bifour_-removebg-preview.png'
  },
  {
    id: 4,
    image: './assets/bifour_-removebg-preview.png'
  },
  {
    id: 5,
    image: './assets/bifour_-removebg-preview.png'
  },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>The world’s Best Bike</Text>
      <View style={styles.category}>
        <View style={styles.categoryName}>
          <Text style={styles.categoryText}>All</Text>
        </View>
        <View style={styles.categoryName}>
          <Text style={styles.categoryText}>Roadbike</Text>
        </View>
        <View style={styles.categoryName}>
          <Text style={styles.categoryText}>Mountain</Text>
        </View>
      </View>
      <View style={styles.allproduce}>
        <FlatList
          contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
    }}
          data={item}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.produce}>
              <Image style={styles.produceImage} source={require('../assets/bifour_-removebg-preview.png')}>
              </Image>
              <Text style={styles.produceName}>Pinarello</Text>
              <View style={styles.producePrice}>
                <Text style={styles.produceMoney}>$</Text>
                <Text style={styles.produceNumber}>1800</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 15,
  },
  headerText:{
    color: '#E94141',
    fontWeight: 700,
    fontSize: 24,
    textAlign: 'left'
  },
  category:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoryName:{
    borderColor: '#E9414187',
    borderWidth: 1,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 5
  },
  categoryText:{
    color: '#E9414187',
    fontSize: 16,
    fontWeight: 400
  },
  allproduce:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  produce:{
    marginTop: 20,
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center'
  },
  produceImage:{
    width: 130,
    height: 120
  },
  producePrice:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  produceMoney:{
    color: '#F7BA83',
    fontSize: 18
  },
  produceNumber:{
    fontSize: 16
  }
});
