import { StatusBar } from "react-native";
import { StyleSheet, Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Ionicons";
import Icons1 from "react-native-vector-icons/Feather";
import Icons2 from "react-native-vector-icons/Octicons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Icon name="menu" size={30} color="#bdbdbd" />
        <View style={styles.heads}>
        <Text style={styles.meet}>Meet</Text>
        </View>
        <View style={styles.texts}>
        <Text style={styles.acc}>S</Text>
        </View>
      </View>
      <View style={styles.top}>
          <Text style={styles.new}>New meeting</Text>
          <Text style={styles.join}>Join a meeting</Text>
        </View>
      <View style={styles.body}>
        
        <Image
          style={styles.image1}
          source={require("./src/logo.jpg")} 
          resizeMode="stretch"// static image
        />
        <Text style= {styles.get}>Get a link that you can</Text>
        <Text style= {styles.get}>share</Text>
        <Text style = {styles.tap}>Tap <Text style={{fontWeight: 'bold'}}>New meeting</Text> to get a link that you</Text>
        <Text style = {styles.tap}>can send to people that you want to</Text>
        <Text style = {styles.tap}>meet with</Text>
      </View>
      <View style={styles.bot}>
      <Text style = {styles.txt}>.</Text>
      <Text style = {styles.txt1}>.</Text>
         </View>

      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#1f1f1f"
        translucent={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    
  },
  head:{
    flexDirection: 'row',
    alignItems: 'center',
paddingVertical: 40,
paddingHorizontal: 10,
gap: 10
  },
  body:{
  flex: 1,  
alignItems: 'center',
justifyContent: 'center'
  },
  heads:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  meet: {
    fontSize: 22,
    color: 'white'
  },
  acc:{
    color: 'white',
    fontSize: 15,
   
  },
  texts:{
    backgroundColor: '#502dab',
    borderRadius: 50,
    height: 30,
    width: 30,
  alignItems: 'center',
  justifyContent: 'center'
  },
  top:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
    paddingHorizontal: 10
  },
  new:{
    flex: 1,
    backgroundColor: '#a9c7fb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    fontSize: 16,
    textAlign: 'center',
    color: '#061c59'
  },
  join:{
    flex: 1,
  borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    fontSize: 16,
    textAlign: 'center',
    color: '#a9c7fb',
    borderWidth: 1
  },
  image1:{
    height: 200,
    width: 200
  },
  get:{
    fontSize: 20,
    color: 'white'
  },
  tap:{
    width: 250,
    fontSize: 15,
    color: '#bdbdbd',
    textAlign: 'center'
  },
  bot:{
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center'
  },
  txt:{
    color: '#a9c7fb',
    fontSize: 80
  },
  txt1:{
    color: '#bdbdbd',
    fontSize: 80
  }
});
