import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View, FlatList, BackHandler,Alert } from 'react-native'
import Api from '../../api'
import Header from '../../components/header'
import Card from '../../components/card'

const Home = () => {

  const [anime, setAnime] = useState([]);
  const listFilm = async () => {
    await Api.get('/Movies/List')
      .then((response) => {
        // console.log(response.data);
        const respon = response.data;
        if (respon.Status == 'S') {
          setAnime(respon.Data);
        } else {
          alert(respon.Message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    listFilm();
  }, []);
  
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const renderItem = ({item}) => (
    <View>
      {anime.map((value, index) => {
        return (
          <Card
            key={'anime-' + value.id}
            title={value.judul}
            rating={value.rating}
            image={value.poster}
          />
        );
      })}
    </View>
  );

  return (
    <View style={styles.page}>
      <Header title="Home" />
      <Text style={styles.title}>Daftar Anime</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={anime}
          renderItem={renderItem}
          keyExtractor={(item) => 'anime-' + item.id}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});