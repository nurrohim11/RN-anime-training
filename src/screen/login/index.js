import React,{useState, useEffect} from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  Button, 
  TouchableOpacity, 
  Image,
  Modal,
  Dimensions,
  ActivityIndicator
 } from 'react-native'
import Api from '../../api'
import RepoUtil from '../../helper/RepoUtil'
import { Actions } from 'react-native-router-flux';

const Login = () => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSecure, setIsSecure] = useState(true)
  const [isProcess, setIsProcess] = useState(false)
  const [session, setSession] = useState(null)

  useEffect(()=>{
    checkSession();
  },[])

  const checkSession= async()=>{
    const dataRepository = await RepoUtil.GetAsObject('@session')
    console.log(dataRepository)
    setSession(dataRepository)
    if(dataRepository != null){
      Actions.Main()
    }
  }

  const win = Dimensions.get('window');
  const {width, height} = win;

  const login = async()=>{
    setIsProcess(true)
    const params = {
      username: username, 
      password:password
    }

    await Api.post('Auth/Login', params)
      .then(async (response) => {
        console.log(response.data);
        let res = response.data
        setIsProcess(false)
        if(res.Status == 'S'){
            RepoUtil.StoreAsObject('@session',res.Data)
            alert('login berhasil juragan')
            Actions.Main()
        } else {
          RepoUtil.StoreAsObject('@session',null)
          alert(res.Message);
        }

      })
      .catch((error) => {
        console.log(error);
        RepoUtil.StoreAsObject('@session',null)
        setIsProcess(false)
      });
  }

  return (
    <View style={styles.page}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.form}
        placeholder="Username"
        value={username}
        onChangeText={(value)=>setUsername(value)}
      />
      <Text style={styles.label}>Password</Text>
      <View style={styles.container}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.textBox}
            placeholder="Password"
            secureTextEntry={isSecure}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity
          onPress={() => setIsSecure(!isSecure)}
          style={styles.touachableButton}>
            <Image source={
              isSecure 
              ? require('../../assets/icon/invisible.png') 
              : require('../../assets/icon/view.png')} 
              style={styles.buttonImage}/>
          </TouchableOpacity>
        </View>
        <Button onPress={()=>login()} title="Login" color="green" disabled={isProcess ? true : false} />

        <Modal animationType="slide" transparent={true} visible={isProcess}>
          <View
            style={{
              height: height,
              backgroundColor: 'rgba(0,0,0, 0.7)',
              alignItems: 'center',
              paddingTop: height * 0.5,
            }}>
            <ActivityIndicator size="large" color="#D2292D" />
          </View>
        </Modal>
    </View>

  )
}

export default Login

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 30,
  },
  label: {
    marginBottom: 10,
  },
  form: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },

  headerText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
   textBox: {
    alignSelf: 'stretch',
    height: 40,
    paddingRight: 45,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  touachableButton: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },

});
